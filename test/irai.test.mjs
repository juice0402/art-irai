import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { judge, checkRequest } from '../scripts/irai.mjs';

const REPO = 'juice0402/art-irai';
const good = `# 草原の背景

状態：依頼中
ブランチ：\`art/okashi-bg1\`（描きなおしは -2）
保存先：\`out/okashi/bg1.png\`
`;
const pr = (files, extra = {}) => judge({ headRef: 'irai/okashi-bg1', headRepo: REPO, baseRepo: REPO, files, ...extra });

test('依頼書と元の絵だけの PR はマージしてよい', () => {
  const r = pr([
    { filename: 'requests/okashi/bg1.md', status: 'added', text: good },
    { filename: 'sources/okashi/ref/shop.png', status: 'added', size: 300000 },
  ]);
  assert.deepEqual(r, { ok: true, skip: false, reasons: [] });
});

test('状態を「済」にする直しもマージしてよい', () => {
  const r = pr([{ filename: 'requests/okashi/bg1.md', status: 'modified', text: good.replace('依頼中', '済') }]);
  assert.equal(r.ok, true);
});

test('irai/ でないブランチ（Codex の art/ など）はさわらない', () => {
  const r = judge({ headRef: 'art/okashi-bg1', headRepo: REPO, baseRepo: REPO, files: [{ filename: 'out/okashi/bg1.png', status: 'added' }] });
  assert.equal(r.ok, false);
  assert.equal(r.skip, true);
});

test('ほかのファイルが入ったらマージしない', () => {
  for (const filename of ['AGENTS.md', '.github/workflows/irai.yml', 'scripts/irai.mjs', 'out/okashi/bg1.png', 'requests/_hinagata.md', 'requests/okashi/a/b.md', 'sources/okashi/x.svg', 'sources/Okashi/x.png', 'sources/okashi/../x.png']) {
    const r = pr([{ filename, status: 'added', text: good }]);
    assert.equal(r.ok, false, filename);
  }
});

test('消す・フォーク・多すぎる・大きすぎる画像はマージしない', () => {
  assert.equal(pr([{ filename: 'requests/okashi/bg1.md', status: 'removed' }]).ok, false);
  assert.equal(pr([{ filename: 'requests/okashi/bg1.md', status: 'added', text: good }], { headRepo: 'someone/art-irai' }).ok, false);
  assert.equal(pr(Array.from({ length: 61 }, (_, i) => ({ filename: `sources/okashi/${i}.png`, status: 'added', size: 1 }))).ok, false);
  assert.equal(pr([{ filename: 'sources/okashi/big.png', status: 'added', size: 11 * 1024 * 1024 }]).ok, false);
  assert.equal(pr([]).ok, false);
});

test('名前を変えたときは前の場所も見る', () => {
  assert.equal(pr([{ filename: 'requests/okashi/bg2.md', previous_filename: 'AGENTS.md', status: 'renamed', text: good }]).ok, false);
  assert.equal(pr([{ filename: 'requests/okashi/bg2.md', previous_filename: 'requests/okashi/bg1.md', status: 'renamed', text: good }]).ok, true);
});

test('依頼中の依頼書はブランチと保存先の形を見る', () => {
  assert.deepEqual(checkRequest('r.md', good), []);
  assert.equal(checkRequest('r.md', good.replace('art/okashi-bg1', 'main')).length, 1);
  assert.equal(checkRequest('r.md', good.replace('out/okashi/bg1.png', 'assets/bg1.png')).length, 1);
  assert.equal(checkRequest('r.md', good.replace('状態：依頼中\n', '')).length, 1);
});

test('ひな形の行の形は、そのまま書き写せば通る', () => {
  const h = readFileSync('requests/_hinagata.md', 'utf8')
    .replace(/<記号>/g, 'okashi').replace(/<名前>/g, 'bg1').replace(/<ファイル>/g, 'shop');
  assert.deepEqual(checkRequest('requests/okashi/bg1.md', h), []);
});
