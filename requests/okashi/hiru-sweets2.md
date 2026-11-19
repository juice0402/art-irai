# 朝のお菓子：基本素材どうし2（7つ）

状態：済
依頼日：2026-11-19
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（まんなかのクッキーの画風・塗り・大きさにそろえる）
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/hiru-sweets2.png`
ブランチ：`art/okashi-hiru-sweets2`
点検：7つがはっきり分かれている／上の段 野いちごジャム・ミルクアイス・カスタードプリン・いちごババロア ／下の段 たまごボーロ・いちごスフレ・いちごソルベ／参考の絵と同じ塗り／人と字が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
7 separate items in two rows with wide even spacing, four in the top row and three in the bottom row, fantasy sweets, matching the center cookie in the first reference image in soft anime style with smooth painterly shading and warm lighting. Top row from left: a small jar of wild strawberry jam with a cloth lid; a scoop of milk ice cream in a little glass cup; a custard pudding with caramel sauce; a pink strawberry bavarois. Bottom row from left: a little pile of tiny round egg biscuits; a puffy strawberry souffle in a small ramekin; a scoop of bright red strawberry sorbet in a glass. Each item centered in its own cell, seen slightly from above, no people, no text, no letters, no labels. Any green parts are a warm yellowish green or pale minty aqua, clearly different from the background. No shadow on the background, flat solid green background (#00FF00).
```

## Claude のメモ
- H-027（昼のお願い・11/19）。名前のとおり assets/art に入れれば昼のコードが自動で使う。棚のかご60px・天板・レシピ帳
- 取りこむときは `prep_art.py parts <PNG> 256 sweet-hachimitsu-ichigo sweet-milk-milk sweet-egg-milk sweet-ichigo-milk sweet-egg-egg sweet-egg-ichigo sweet-ichigo-ichigo`（上の段から左→右）

## Claude の確認（ここは依頼したチャットが書く）
- 11/19 朝 合格（PR #129）。mazemaze-okashiya に取りこんだ
