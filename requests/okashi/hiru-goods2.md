# 雑貨屋のべんり道具4つ

状態：依頼中
依頼日：2026-11-19
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（まんなかのクッキーの画風・塗り・大きさにそろえる）
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/hiru-goods2.png`
ブランチ：`art/okashi-hiru-goods2`
点検：4つがはっきり分かれている／上の段 おまかせオーブン・超はやおくりの砂時計 ／下の段 からくり陳列人形・ひるねの鐘／参考の絵と同じ塗り／人と字が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
4 separate items in a two-by-two grid with wide even spacing, magical shop tools, matching the center cookie in the first reference image in soft anime style with smooth painterly shading and warm lighting. Top row from left: a small cute automatic brick oven with a brass dial and a little clockwork key; a sparkling hourglass with golden sand and small wing-shaped ornaments. Bottom row from left: a small wooden clockwork doll in a shop apron holding a tray, a wind-up key on its back; a small brass bell with a crescent moon ornament and a soft ribbon. Each item centered in its own cell, seen slightly from above, no people, no text, no letters, no labels. Any green parts are a warm yellowish green or pale minty aqua, clearly different from the background. No shadow on the background, flat solid green background (#00FF00).
```

## Claude のメモ
- H-027（昼のお願い・11/19）。名前のとおり assets/art に入れれば昼のコードが自動で使う。雑貨屋の一覧の左に40px
- 取りこむときは `prep_art.py parts <PNG> 128 tool-oven tool-sand tool-doll tool-bell`（上の段から左→右）

## Claude の確認（ここは依頼したチャットが書く）
