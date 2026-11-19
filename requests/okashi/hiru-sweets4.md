# 朝のお菓子：ハーブ（7つ）

状態：済
依頼日：2026-11-19
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（まんなかのクッキーの画風・塗り・大きさにそろえる）
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/hiru-sweets4.png`
ブランチ：`art/okashi-hiru-sweets4`
点検：7つがはっきり分かれている／上の段 ハーブサブレ・ハーブのど飴・ハーブムース・ハーブシフォン ／下の段 ハーブゼリー・ハーブティー・ハーブキャンディ／参考の絵と同じ塗り／人と字が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
7 separate items in two rows with wide even spacing, four in the top row and three in the bottom row, fantasy sweets, matching the center cookie in the first reference image in soft anime style with smooth painterly shading and warm lighting. Top row from left: a herb sable biscuit with tiny leaf bits; golden herb throat candies with a small leaf; a pale herb mousse in a small glass; a slice of herb chiffon cake with a leaf. Bottom row from left: a clear herb jelly with a wild strawberry inside; a cup of herb tea with a sprig of herbs; clear candies with tiny herb leaves inside. Each item centered in its own cell, seen slightly from above, no people, no text, no letters, no labels. Any green parts are a warm yellowish green or pale minty aqua, clearly different from the background. No shadow on the background, flat solid green background (#00FF00).
```

## Claude のメモ
- H-027（昼のお願い・11/19）。名前のとおり assets/art に入れれば昼のコードが自動で使う。わかばが来てから
- 取りこむときは `prep_art.py parts <PNG> 256 sweet-herb-mugi sweet-hachimitsu-herb sweet-herb-milk sweet-egg-herb sweet-herb-ichigo sweet-herb-herb sweet-herb-mizuame --strict`（上の段から左→右）

## Claude の確認（ここは依頼したチャットが書く）
- 11/19 午前 合格（PR #134）。mazemaze-okashiya に取りこんだ
