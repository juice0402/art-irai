# 朝のお菓子：しずく寒天のお菓子7つ

状態：済
依頼日：2026-11-19
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（まんなかのクッキーの画風・塗り・大きさにそろえる）・`sources/okashi/mat-ref-kanten.png`（2まいめ。この素材の色と形が、どのお菓子にもわかるように）
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/hiru-mon-kanten.png`
ブランチ：`art/okashi-hiru-mon-kanten`
点検：7つがはっきり分かれている／上の段 ひんやりクッキー・ひんやりケーキ・ひんやりアイス・ひんやりプリン ／下の段 ひんやりタルト・ひんやりあめ・ひんやりゼリー／参考の絵と同じ塗り／人と字が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
7 separate items in two rows with wide even spacing, four in the top row and three in the bottom row, fantasy sweets, matching the center cookie in the first reference image in soft anime style with smooth painterly shading and warm lighting. Every sweet is made with the special ingredient shown in the second reference image, clear water-drop shaped agar jelly, so its color and shape are easy to recognize on each one. Top row from left: a round cookie made with the clear water-drop shaped agar jelly; a small round cake made with the clear water-drop shaped agar jelly; a scoop of ice cream in a little glass cup made with the clear water-drop shaped agar jelly; a custard pudding made with the clear water-drop shaped agar jelly. Bottom row from left: a small tart made with the clear water-drop shaped agar jelly; a round hard candy on a stick made with the clear water-drop shaped agar jelly; a jelly dessert in a small glass made with the clear water-drop shaped agar jelly. Each item centered in its own cell, seen slightly from above, no people, no text, no letters, no labels. Any green parts are a warm yellowish green or pale minty aqua, clearly different from the background. No shadow on the background, flat solid green background (#00FF00).
```

## Claude のメモ
- H-027（昼のお願い・11/19）。名前のとおり assets/art に入れれば昼のコードが自動で使う。モンスター素材 kanten（しずく寒天）×形の素材
- 取りこむときは `prep_art.py parts <PNG> 256 sweet-kanten-mugi sweet-hachimitsu-kanten sweet-kanten-milk sweet-egg-kanten sweet-ichigo-kanten sweet-kanten-mizuame sweet-herb-kanten`（上の段から左→右）

## Claude の確認（ここは依頼したチャットが書く）
- 11/19 昼 合格（PR #147）。mazemaze-okashiya に取りこんだ（parts 192）
