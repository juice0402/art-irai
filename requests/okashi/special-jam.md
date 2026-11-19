# ★3の飴ジャムのカード6つ（わかばのジャムのカードを編集）

状態：依頼中
依頼日：2026-11-19
依頼したチャット：【okashi】
やり方：編集
元の絵：`sources/okashi/cards-wakaba2.png`（わかばのジャムのカード6つ）
参考の絵：なし
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/special-jam.png`
ブランチ：`art/okashi-special-jam`
点検：元の絵と同じ位置に6つ（3×2）／上の段 実のジャムでいっぱいのびん・ジャムがぐつぐつの銅の大鍋と木のスプーン（元の大きな空のびんの場所）・大きな王冠のきいちごジャム ／下の段 金のリボンのジャムとみかん・金のスプーンからジャムがあふれるびん・きらきらの水あめをかけたくだもの飴／ラベルと字が入っていない／元の絵と同じ塗り／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
Edit this image. Keep the six items in exactly the same grid positions, the same soft anime painterly style and the same flat solid green background (#00FF00). Turn each one into a grand finished jam treat with glossy glowing jam and small gold sparkles. Top row from left: the empty jar becomes the same jar filled to the top with glossy mixed fruit jam, fresh fruits beside it; the large empty jar becomes a big copper pot of bubbling glossy red jam with a wooden spoon, fruits around it; the crowned berry jam jar becomes a larger jar with a bigger gold crown and raspberries around it. Bottom row from left: the amber jam jar with a ribbon becomes the jar with a big gold ribbon bow and mandarin segments beside it; the spoon dripping jam becomes a golden spoon pouring a shining ribbon of jam into an overflowing jar; the glass dipper becomes a glass dipper dripping sparkling clear syrup over a small stack of glossy fruit candies. Each item stays centered in its own cell, no people, no text, no letters, no labels. No shadow on the background.
```

## Claude のメモ
- 飴ジャムのビルドの★3（art.js の special-<カード>・上の段のまんなかは ジャムの大鍋 jamnabe）
- 取りこむときは `prep_art.py parts … special-garabin special-jamnabe special-ichijam special-shimejam special-torojam special-kirakira --strict --despill`（上限300）

## Claude の確認（ここは依頼したチャットが書く）
