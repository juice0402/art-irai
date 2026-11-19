# エフェクト：みなもの夜の空気（雪の結晶・飴の泡・氷のかけら・霜のすみ）

状態：済
依頼日：2026-11-19
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（画風・塗り・あたたかい光）・`sources/okashi/ui-now.png`（いまのゲームの画面。色と形のめやす。字はまねない）
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/minamo-fx.png`
ブランチ：`art/okashi-minamo-fx`
点検：参考の絵と同じ画風／4つがはっきり分かれている（2×2）／左上 六角の雪の結晶・右上 中がすけた丸い飴の泡（ふちと光だけ）・左下 小さな氷のかけら・右下 左上のすみから広がる霜の模様／字が入っていない／背景は無地の緑

## 画像への指示（このまま使う）

1.
```
A game effect asset sheet on a flat solid green background (#00FF00), four separate items in a two-by-two grid with wide even spacing, each centered in its quarter, front view, no text, no letters, no numbers. Style: soft anime painterly shading matching the first reference image, gentle magical sparkle, delicate and clean shapes. Top left: one small six-pointed snowflake crystal, white with very pale icy cyan highlights and a soft white glow edge, symmetrical. Top right: one round transparent candy syrup bubble; draw only its thin warm honey-amber rim, a soft curved white highlight streak and a tiny white sparkle, and leave everything inside the bubble as the flat green background so the inside can be cut out. Bottom left: one small jagged ice crystal shard, pale cyan and white, slightly glossy with a bright edge highlight. Bottom right: a quarter-frame of frost growing from the top-left corner of its area, white and pale icy cyan feathery frost crystals thick at the corner and thinning out toward the right and the bottom, so it can be placed in the corners of the screen. No shadows on the background.
```

## Claude のメモ
- 11/19 しょーくん「みなものエフェクトって、描きおろしてる？」→ えらぶ質問で「描き下ろす」。いまはコードの雪・泡・霜（battle-fx.js の aquaHTML・aquaTempFx・style-battle.css の .aq-p・.aq-frost）。床の水色の横だ円（水面の光）はやめた
- 使い道：fx-snow（ひえひえ・ひんやりでふる雪）・fx-bubble（あたたか・とろとろでのぼる泡）・fx-iceshard（冷えた瞬間・ピキーン！で飛ぶかけら）・fx-frost（ひえひえのとき舞台の4すみの霜・左右上下は反転で使う）
- 取りこむときは `prep_art.py parts <PNG> 320 fx-snow fx-bubble fx-iceshard fx-frost --strict`（上の段から左→右・水色があるので --strict。泡の中は緑で抜けるので、中まで抜けているか見る）

## Claude の確認（ここは依頼したチャットが書く）
- 11/19 12時半 合格（PR #155）。mazemaze-okashiya に取りこんだ（main c66707f・4つのます目で切って、緑のすけは明るさで作りなおした）
