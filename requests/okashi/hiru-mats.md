# 朝の素材7つとまぜまぜパフェ

状態：待ち
依頼日：2026-11-19
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（まんなかのクッキーの画風・塗り・大きさにそろえる）
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/hiru-mats.png`
ブランチ：`art/okashi-hiru-mats`
点検：8つがはっきり分かれている／上の段 こもれび小麦・森のはちみつ・まきばミルク・こもれびたまご ／下の段 野いちご・水あめ・ハーブ・まぜまぜパフェ／参考の絵と同じ塗り／人と字が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
8 separate items in a four-by-two grid with wide even spacing, fantasy sweets-shop ingredients and one dessert, matching the center cookie in the first reference image in soft anime style with smooth painterly shading and warm lighting. Top row from left: a small bundle of golden wheat ears beside a little cloth sack of flour; a round glass honey jar with a wooden honey dipper and golden honey; a small glass milk bottle with a cork, full of creamy white milk; two warm cream-colored eggs in a little nest of straw. Bottom row from left: a small cluster of bright red wild strawberries with a few leaves; a small glass jar of clear golden starch syrup with a wooden stick pulling up a glossy stretchy strand; a small bunch of fresh herbs tied with twine; a tall parfait glass layered with light blue jelly, fluffy whipped cream, rainbow syrup, colorful star-shaped sugar candies and amber caramel, a clear water-drop jelly on top. Each item centered in its own cell, seen slightly from above, no people, no text, no letters, no labels. Any green parts are a warm yellowish green or pale minty aqua, clearly different from the background. No shadow on the background, flat solid green background (#00FF00).
```

## Claude のメモ
- H-027（昼のお願い・11/19）。名前のとおり assets/art に入れれば昼のコードが自動で使う。材料だなのタイル48px・レシピ帳
- 取りこむときは `prep_art.py parts <PNG> 256 mat-mugi mat-hachimitsu mat-milk mat-egg mat-ichigo mat-mizuame mat-herb sweet-parfait --strict`（上の段から左→右）

## Claude の確認（ここは依頼したチャットが書く）
