# わかばのカード：飴ジャムの主役6

状態：済
依頼日：2026-11-18
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（まんなかのクッキーの画風・塗り・大きさにそろえる）
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/cards-wakaba2.png`
ブランチ：`art/okashi-cards-wakaba2`
点検：上の段 ガラスのびん（空のジャムびん）・大きなびん（大きな空のジャムびん）・いちばんジャム（いちごジャムのびんに小さな王冠） ／下の段 しめのジャム（リボンを結んだジャムびん）・とろとろジャム（スプーンからたれるジャム）・きらきら水あめ（光る水あめのしずく）／6つが3×2のマスにはっきり分かれている／参考の絵と同じ塗り／人と字が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
6 separate fantasy sweets-shop items in a three-by-two grid with wide even spacing, matching the center cookie in the reference image in soft anime style with smooth painterly shading and warm lighting and size. Top row from left: an empty clear jam jar with a cloth lid tied with string; a large empty clear jam jar with a cork lid; a jar of bright red berry jam wearing a tiny gold crown. Bottom row from left: a jar of amber jam tied with a ribbon bow; a spoon dripping thick glossy jam over a jar; a glass dipper with sparkling clear syrup drops. Each item centered in its own cell, seen slightly from above, no people, no text, no letters. Any green parts are a warm yellowish green or pale minty aqua, clearly different from the background. No shadow on the background, flat solid green background (#00FF00).
```

## Claude のメモ
- 取りこむときは `prep_art.py parts … card-garabin card-ookibin card-ichijam card-shimejam card-torojam card-kirakira --strict`（上の段から左→右・上限300）。緑っぽい物が消えたら外側だけ抜く
- claude/okashi-builds.md のわかばのカード（名前と id は仮・11/18 リーダー）

## Claude の確認（ここは依頼したチャットが書く）
- 11/19 0時40分 合格（PR #106）。mazemaze-okashiya の assets/art-stock/ にストック
