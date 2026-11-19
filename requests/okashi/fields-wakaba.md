# わかばのフィールド3つ（のびのび肥料・すくすく肥料・デコレーション台）

状態：済
依頼日：2026-11-19
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（まんなかのクッキーの画風・塗り・大きさにそろえる）
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/fields-wakaba.png`
ブランチ：`art/okashi-fields-wakaba`
点検：3つが横に3等分した場所のまんなかにある／左＝麻袋のたい肥から長いつるが伸びている（のびのび肥料）・まんなか＝きらきらの栄養のびんと小さな芽（すくすく肥料）・右＝ケーキのデコレーション台としぼり袋・カラースプレー（デコレーション台）／参考の絵と同じ塗り／人と字が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
Three separate fantasy sweets-shop items side by side with wide even spacing, matching the center cookie in the reference image in soft anime style with smooth painterly shading and warm lighting and size. Left: a big plump burlap sack of rich dark brown garden compost, with long healthy vines and large leaves growing out of its open top and curling upward. Center: a small round glass bottle of sparkling golden plant tonic with a cork, surrounded by tiny fresh sprouts popping up and little sparkles. Right: a round cake decorating turntable stand of white porcelain on a wooden base, with a piping bag of pink cream, a small bowl of colorful sprinkles and a few berries beside it. Each item is centered in its own third of the image, seen slightly from above, no people, no text, no letters. Any green parts are a warm yellowish green or pale minty aqua, clearly different from the background. No shadow on the background, flat solid green background (#00FF00).
```

## Claude のメモ
- わかばのフィールド（claude/okashi-builds.md）。いまは field-hatake・card-hiryo・field-terrace を仮に使っている
- 取りこむときは `prep_art.py three … field-nobi field-suku field-decodai`（上限300）。葉が消えたら --strict

## Claude の確認（ここは依頼したチャットが書く）
- 11/19 9時50分 合格（PR #118）。mazemaze-okashiya に取りこむ
