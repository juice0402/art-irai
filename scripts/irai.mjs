// 依頼書の PR を自動でマージする（.github/workflows/irai.yml から呼ぶ）
// マージするのは、ブランチが irai/ で、依頼書（requests/<記号>/*.md）と元の絵（sources/<記号>/ の画像）だけの PR。
// それ以外（Codex の art/ の PR・ほかのファイルが入った PR）はさわらない。
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

export const MAX_FILES = 60;
export const MAX_IMAGE_BYTES = 10 * 1024 * 1024;
const KEY = '[a-z0-9][a-z0-9-]*';
const REQ = new RegExp(`^requests/${KEY}/[^/]+\\.md$`);
const SRC = new RegExp(`^sources/${KEY}/(?:[^/]+/)*[^/]+\\.(?:png|PNG|jpe?g|JPE?G|webp|WEBP)$`);
const MARK = '<!-- irai-automerge -->';

const line = (text, name) => {
  const m = text.match(new RegExp(`^${name}：(.*)$`, 'm'));
  return m ? m[1].trim() : null;
};
const tick = (s) => (s || '').replace(/`/g, '').split(/[（(\s]/)[0];

// 依頼書の中身を見る。問題があれば理由の配列
export function checkRequest(path, text) {
  const out = [];
  const state = line(text, '状態');
  if (state === null) out.push(`${path}：「状態：」の行がない`);
  const branch = tick(line(text, 'ブランチ'));
  const save = tick(line(text, '保存先'));
  if (state === '依頼中') {
    if (!/^art\/[a-z0-9][a-z0-9-]*$/.test(branch)) out.push(`${path}：「ブランチ：」が art/<英小文字・数字・ハイフン> になっていない`);
    if (!/^out\/[a-z0-9][a-z0-9-]*\/[^/]+\.png$/.test(save)) out.push(`${path}：「保存先：」が out/<記号>/<名前>.png になっていない`);
  }
  return out;
}

// PR をマージしてよいか。files は {filename, status, previous_filename?, size?, text?}
export function judge({ headRef, headRepo, baseRepo, files }) {
  const reasons = [];
  if (!headRef.startsWith('irai/')) return { ok: false, skip: true, reasons: ['ブランチが irai/ ではない'] };
  if (headRepo !== baseRepo) reasons.push('ほかのリポジトリ（フォーク）からの PR');
  if (!files.length) reasons.push('変更がない');
  if (files.length > MAX_FILES) reasons.push(`ファイルが多すぎる（${files.length}・上限 ${MAX_FILES}）`);
  for (const f of files) {
    const paths = [f.filename, f.previous_filename].filter(Boolean);
    if (f.status === 'removed') { reasons.push(`${f.filename}：消すのは自動ではマージしない`); continue; }
    for (const p of paths) {
      if (p.includes('..') || !(REQ.test(p) || SRC.test(p))) reasons.push(`${p}：requests/<記号>/*.md と sources/<記号>/ の画像のほかは自動ではマージしない`);
    }
    if (SRC.test(f.filename) && typeof f.size === 'number' && f.size > MAX_IMAGE_BYTES) reasons.push(`${f.filename}：画像が大きすぎる（10MB まで）`);
    if (REQ.test(f.filename) && typeof f.text === 'string') reasons.push(...checkRequest(f.filename, f.text));
  }
  return { ok: reasons.length === 0, skip: false, reasons };
}

async function api(path, init = {}) {
  const res = await fetch(`https://api.github.com${path}`, {
    ...init,
    headers: {
      authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      accept: 'application/vnd.github+json',
      'x-github-api-version': '2022-11-28',
      ...(init.body ? { 'content-type': 'application/json' } : {}),
    },
  });
  const body = res.status === 204 ? null : await res.json().catch(() => null);
  return { status: res.status, body };
}

async function main() {
  const repo = process.env.GITHUB_REPOSITORY;
  const event = JSON.parse(readFileSync(process.env.GITHUB_EVENT_PATH, 'utf8'));
  const number = event.pull_request.number;
  const pr = (await api(`/repos/${repo}/pulls/${number}`)).body;
  if (pr.state !== 'open' || pr.draft) { console.log('開いていない・下書きの PR'); return; }
  const files = (await api(`/repos/${repo}/pulls/${number}/files?per_page=100`)).body || [];
  for (const f of files) {
    if (f.status === 'removed') continue;
    const c = (await api(`/repos/${repo}/contents/${encodeURI(f.filename)}?ref=${pr.head.sha}`)).body;
    if (!c) continue;
    f.size = c.size;
    if (REQ.test(f.filename) && c.content) f.text = Buffer.from(c.content, 'base64').toString('utf8');
  }
  const r = judge({ headRef: pr.head.ref, headRepo: pr.head.repo?.full_name, baseRepo: repo, files });
  if (r.skip) { console.log('irai/ のブランチではないので、さわらない'); return; }
  if (!r.ok) {
    console.log(r.reasons.join('\n'));
    const comments = (await api(`/repos/${repo}/issues/${number}/comments?per_page=100`)).body || [];
    const body = `${MARK}\n自動ではマージしなかった（直して push すると、もう一度見る）\n${r.reasons.map((x) => `- ${x}`).join('\n')}`;
    const old = comments.find((c) => c.body?.startsWith(MARK));
    if (old) await api(`/repos/${repo}/issues/comments/${old.id}`, { method: 'PATCH', body: JSON.stringify({ body }) });
    else await api(`/repos/${repo}/issues/${number}/comments`, { method: 'POST', body: JSON.stringify({ body }) });
    return;
  }
  const m = await api(`/repos/${repo}/pulls/${number}/merge`, {
    method: 'PUT',
    body: JSON.stringify({ merge_method: 'squash', sha: pr.head.sha, commit_title: `${pr.title} (#${number})` }),
  });
  if (m.status !== 200) { console.log(`マージできなかった：${m.status} ${m.body?.message || ''}`); process.exitCode = 1; return; }
  console.log(`マージした：${m.body.sha}`);
  const d = await api(`/repos/${repo}/git/refs/heads/${encodeURI(pr.head.ref)}`, { method: 'DELETE' });
  console.log(d.status === 204 ? 'ブランチを消した' : `ブランチは残った（${d.status}）`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) await main();
