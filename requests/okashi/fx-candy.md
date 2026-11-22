# 演出：ちいさなキャンディの夜の一撃（光るので黒い背景）

状態：依頼中
依頼日：2026-11-22
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（画風・塗り・あたたかい光）
大きさ：1536×1024
背景：無地の黒 #000000（光るものなので黒。透明にしなくてよい）
保存先：`out/okashi/fx-candy.png`
ブランチ：`art/okashi-fx-candy`
点検：6つが3×2のマスに分かれていて重なっていない／氷や雪や水ではなく「飴」（ピンク・レモン色・ミント色・白のしま・つやつや）／上の段：1 飴がはじける衝撃の輪・2 しましまの飴のリボンの斬撃の弧・3 まんがのような ぎざぎざの衝撃の星（まんなかが白く明るい）／下の段：4 衝撃のあとに飛び散る小さな飴とスプリンクルの輪・5 しましまの飴の輪（リング）・6 ペロペロキャンディのうずまきと きらきら／人と字が入っていない

## 画像への指示（このまま使う）

```
6 separate glowing visual effects in a three-by-two grid with wide even spacing on a flat solid black background (#000000), soft anime painterly glow matching the reference image, for a cozy sweets shop card game, bright and joyful, made of glossy hard candy (pastel pink, lemon yellow, mint green and white candy stripes), NOT ice, NOT snow, NOT water. Top row from left: a bursting candy impact ring with sparkling candy shards and a bright white center; a sweeping arc slash made of a glossy striped candy ribbon with sparkles trailing; a huge comic-style jagged impact star in candy pink and white with a blinding white center and sprinkles. Bottom row from left: a ring of flying tiny candies, sprinkles and light streaks bursting outward; a glowing ring made of twisted striped candy; a swirling lollipop spiral with stars and sparkles. Each effect isolated with plenty of black space around it, no people, no text.
```

## Claude のメモ
- 11/22 しょーくん「飴の演出（ちいさなキャンディの夜）を描き下ろしに」。いまは みなもの氷の絵の色を回して使っている
- 取りこむときは 3×2 に切って 黒は明るさで すけに（tools/glow_art.py）：fx-burst-candy・fx-slash-candy・fx-numhit-candy（上の段）／fx-scatter-candy・fx-candy-ring・fx-candy-swirl（下の段）。battle-fx.js の impactFx・chefFlourish（キャンディの夜）

## Claude の確認（ここは依頼したチャットが書く）
