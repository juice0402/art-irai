# 絵の依頼箱（art-irai）

いろいろなゲームやサイトのチャット（Claude）が、Codex に絵を頼む箱。チャットが GitHub のコメントで `@codex` と頼むと、Codex（ChatGPT Plus の中・追加の料金なし・API キーなし）がここの依頼書を読んで描き、カギ（GH_TOKEN）で自分で push して PR を出す。決まりのもとはプロジェクトの claude/game-art-rule.md（「AI の絵の道具の使い分け」で Codex になった絵だけをここに頼む。まずは Canva）。

## 置き場所
- `requests/<記号>/<名前>.md`：依頼書（ひな形は `requests/_hinagata.md`）。<記号> はゲームやサイトの記号（okashi・tower など）
- `sources/<記号>/`：元の絵・参考の絵（自分のゲームの絵か、権利がはっきりした絵だけ。Canva のライブラリの素材が入った絵・ほかの作品の絵は置かない）
- `out/<記号>/`：Codex が描いた絵（Codex の PR のブランチ `art/<記号>-<名前>` にだけ入る。main には入らない）
- `AGENTS.md`：Codex への決まり

## 頼み方（依頼したいチャット）
1. add_repo（owner juice0402・repo art-irai・access push）→ clone → ブランチ `irai/<記号>-<名前>`
2. `requests/_hinagata.md` を `requests/<記号>/<名前>.md` に写して書く。英語の「画像への指示」に、ほかの作品の名前・キャラの名前・作家の名前・「〇〇風」・会社の名前を入れない。編集なら元の絵を `sources/<記号>/` に置く
3. push して gh api で PR（題「依頼：<記号> <何の絵か>」）
4. 依頼書と元の絵だけの PR は、Actions「依頼の自動マージ」が1分ほどで main に入れる（「マージして」は要らない）。ほかのファイルが入っていると、PR にコメントして止まる
5. main に入ったら、issue #3「Codex への頼み口」に gh api でコメントする（1行目から）
```
@codex AGENTS.md の決まりで、requests/ の「状態：依頼中」を描いて、カギで送って PR を作って
```
6. Codex が描いて、PR（題「絵：…」・ブランチ `art/…`）を出す。ほかのチャットの依頼中もいっしょに描く（多くて3つ）。動かないときは、しょーくんが Codex の画面（環境 art-irai）で同じ文を送る（予備）

## 受けとり方（朝）
1. Codex の PR の絵を見て合否を決める（大事な見本の絵はしょーくんの OK）
2. 合格：`git fetch origin art/<記号>-<名前>` で `out/<記号>/` の絵を取り、背景の緑（光るものは黒）を抜いて自分のリポジトリの PR に入れる。絵の一覧に「A・Codex・作った日・依頼書のパス（art-irai）」を書き、もとの PNG も残す
3. 依頼書の `状態：` を `済` にする PR（ブランチ irai/…・自動でマージされる）
4. Codex の PR は閉じる（マージしない。ブランチは「描き済み」の印として残る）
5. 不合格：依頼書を直して、ブランチ名を新しくして（`-2`・`-3`）`状態：依頼中` にする。同じブランチ名だと Codex は描き済みとして飛ばす

## 気をつけること
- ChatGPT Plus の利用枠は全ゲームで共通（絵は文字の作業の3〜5倍）。Codex は1回に多くて3つ。1つのチャットが同時に「依頼中」にするのは2つまで
- 透明の背景は作れない。無地の緑 #00FF00（光るものは真っ黒 #000000）で描かせて抜く
- Codex のスケジュールは使えない（11/15 monmusu で試した：ChatGPT のタスクとして動き、リポジトリに入れなかった）
- カギ：GitHub の fine-grained token（art-irai だけ・Contents と Pull requests の書きこみ・90日）を、旧 Codex Cloud の環境 juice0402/art-irai の「環境変数」`GH_TOKEN` に入れる（シークレットは作業中に消えるので使わない）。インターネットはカスタムドメイン `github.com, api.github.com` だけ・読み取り専用はオフ。切れる前にしょーくんが作り直して貼りかえる
- fanza の絵はここに頼まない。monmusu は自分のリポジトリ（monster-girls-rpg）の art-requests で動いているのでそのまま

## 自動マージの決まり（scripts/irai.mjs）
- ブランチが `irai/` で、このリポジトリの中から出した PR
- 変えたファイルが `requests/<記号>/*.md` と `sources/<記号>/` の画像（png・jpg・webp・10MB まで）だけ。消すのはだめ・60ファイルまで
- 依頼中の依頼書は「ブランチ：art/…」「保存先：out/<記号>/….png」の形
- 判定のプログラムはいつも main のものを使う。マージしたら irai/ のブランチを消す
- テストは `npm test`
