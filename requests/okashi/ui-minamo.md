# UI：みなもの夜の霜・湯気・大きさのしずく4つ・固まったしずく ＋ 昼のおそろいのリボン

状態：依頼中
依頼日：2026-11-19
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（画風・塗り・あたたかい光）・`sources/okashi/ui-now2.png`（いまのゲームの画面。色と形のめやす。字はまねない）
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/ui-minamo.png`
ブランチ：`art/okashi-ui-minamo`
点検：8つが4×2に分かれている／上の段 1 横長の霜の帯（下のふちが厚く、上はうすい羽の形）・2 立ちのぼる白い湯気3すじ・3 うすい氷色の丸い飴のしずく・4 あざやかな水色の丸い飴のしずく ／下の段 5 はちみつ色の丸い飴のしずく・6 金色に光る丸い飴のしずく（星の光）・7 霜におおわれて固まった白っぽいしずく・8 横長のピンクのサテンのリボン（金のふち・はしは燕尾・まんなかは無地）／しずく4つは同じ大きさと形／字・数字が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
A game UI asset sheet on a flat solid green background (#00FF00), eight separate items in a four-by-two grid with wide even spacing, each centered in its cell, front view, no text, no letters, no numbers. Style: cozy sweets shop, soft anime painterly shading matching the first reference image, warm lighting. Top row from left: a long horizontal band of white and pale ice-blue frost crystals, thick and sparkling along its bottom edge and fading into thin feathery frost toward its top, about four times wider than tall; three soft white wisps of steam rising and curling; a small round glossy candy drop, clear pale icy blue with a white highlight; a small round glossy candy drop, bright clear aqua with a white highlight. Bottom row from left: a small round glossy candy drop, warm honey amber with a white highlight; a small round glossy candy drop, shining gold with a bright star-shaped glint; a small round candy drop frozen solid, pale blue-white and covered with fine frost; a wide horizontal satin ribbon banner in soft pink with thin gold edges and notched swallowtail ends, its plain center empty, about three and a half times wider than tall. All four glossy candy drops are the same size and shape. No shadows on the background.
```

## Claude のメモ
- みなもの夜のコードの仮を絵に（style-battle.css の「みなもの夜」）：1 ui-frost＝ひえひえの飴の台の下のふち（.tcold）・2 ui-steam＝とろとろの湯気（.tst）・3〜6 ui-drop0〜3＝大作の大きさのしずく（.ck.am.c0〜c3）・7 ui-drop-ice＝固まる（.ck.am.ice）
- 8 ui-soroi＝昼のおそろいの列のリボン（H-025・.d-soroi・まんなかに素材のアイコンと字をコードで乗せる・棚板の上に重ねる）
- 取りこむときは `prep_art.py parts … ui-frost ui-steam ui-drop0 ui-drop1 ui-drop2 ui-drop3 ui-drop-ice ui-soroi`（上の段から左→右）。霜と湯気は白くすけるので gridcut の --despill

## Claude の確認（ここは依頼したチャットが書く）
