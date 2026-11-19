# 雑貨屋のグッズ7つ

状態：待ち
依頼日：2026-11-19
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（まんなかのクッキーの画風・塗り・大きさにそろえる）
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/hiru-goods1.png`
ブランチ：`art/okashi-hiru-goods1`
点検：7つがはっきり分かれている／上の段 立て看板・ショーケース・お花・クッション ／下の段 ランプ・ガーランド・観葉植物／参考の絵と同じ塗り／人と字が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
7 separate items in two rows with wide even spacing, four in the top row and three in the bottom row, cozy shop goods, matching the center cookie in the first reference image in soft anime style with smooth painterly shading and warm lighting. Top row from left: a wooden A-frame standing signboard, its board plain and empty; a small glass display showcase with a wooden frame and empty shelves; a small vase of pastel flowers; a round plump cushion with a red gingham pattern. Bottom row from left: a small brass oil lamp with a warm glow; a short garland of little pastel pennant flags on a string; a leafy houseplant in a terracotta pot. Each item centered in its own cell, seen slightly from above, no people, no text, no letters, no labels. Any green parts are a warm yellowish green or pale minty aqua, clearly different from the background. No shadow on the background, flat solid green background (#00FF00).
```

## Claude のメモ
- H-027（昼のお願い・11/19）。名前のとおり assets/art に入れれば昼のコードが自動で使う。雑貨屋の一覧の左に40px
- 取りこむときは `prep_art.py parts <PNG> 128 good-tatekanban good-showcase good-hana good-cushion good-lamp good-garland good-plant --strict`（上の段から左→右）

## Claude の確認（ここは依頼したチャットが書く）
