# みなものカード：道具3と素材3

状態：済
依頼日：2026-11-18
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（まんなかのクッキーの画風・塗り・大きさにそろえる）
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/cards-minamo4.png`
ブランチ：`art/okashi-cards-minamo4`
点検：上の段 こおり水（氷の入った水のボウル）・飴ばさみ（ガラスの飴ばさみ）・飴職人のベル（真ちゅうの小さなベル） ／下の段 うみヘビのしお飴（白い塩の結晶の飴）・こおりウサギの氷砂糖（きらきらの氷砂糖）・にじサカナのうろこ糖（虹色のうろこの形の砂糖）／6つが3×2のマスにはっきり分かれている／参考の絵と同じ塗り／人と字が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
6 separate fantasy sweets-shop items in a three-by-two grid with wide even spacing, matching the center cookie in the reference image in soft anime style with smooth painterly shading and warm lighting and size. Top row from left: a glass bowl of ice water with ice cubes; a pair of elegant glass candy scissors; a small brass bell with a candy-shaped handle. Bottom row from left: salty white candies with sea salt crystals and a small sea-serpent scale; sparkling clear rock sugar crystals with a tiny frosty rabbit tuft; shimmering iridescent fish-scale shaped sugar flakes. Each item centered in its own cell, seen slightly from above, no people, no text, no letters. Any green parts are a warm yellowish green or pale minty aqua, clearly different from the background. No shadow on the background, flat solid green background (#00FF00).
```

## Claude のメモ
- 取りこむときは `prep_art.py parts … card-korimizu card-amebasami card-amebell card-shioame card-korizato card-urokoto --strict`（上の段から左→右・上限300）。緑っぽい物が消えたら外側だけ抜く
- claude/okashi-builds.md のみなものカード（名前と id は仮・11/18 リーダー）

## Claude の確認（ここは依頼したチャットが書く）
- 11/18 23時30分 合格（PR #96）。mazemaze-okashiya main 0ec3525 に取りこんだ
