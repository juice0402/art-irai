# 演出：数字がモンスターにぶつかった瞬間の大きな衝撃（シェフごと・光るので黒い背景）

状態：待ち
依頼日：2026-11-21
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（画風・塗り・あたたかい光）
大きさ：1536×1024
背景：無地の黒 #000000（光るものなので黒。透明にしなくてよい）
保存先：`out/okashi/fx-numhit.png`
ブランチ：`art/okashi-fx-numhit`
点検：6つが3×2のマスに分かれていて重なっていない／上の段は まんがのような ぎざぎざの大きな衝撃の星（まんなかが白く明るい・太いとげが放射状）：1 炎の金とオレンジ・2 飴とガラスの水色と白・3 若葉と花のピンクと黄緑／下の段は 衝撃のあとに飛び散るかけらと光のすじの輪：4 火の粉と星・5 ガラスのかけらときらめき・6 花びらと葉っぱ／どれもはっきり明るく光る・迫力がある／人・物・字が入っていない／背景は無地の黒だけ

## 画像への指示（このまま使う）

```
6 separate glowing visual effects in a three-by-two grid with wide even spacing on a flat solid black background (#000000), soft anime painterly glow matching the reference image, for a cozy sweets shop card game, very powerful and dramatic. Top row: three huge comic-style impact stars, each a jagged spiky starburst with a blinding white center, thick radiating spikes and a shock ring: left, golden and orange fire with embers; middle, pale aqua and white sparkling glass candy; right, pink petals and light green leaves with cream light. Bottom row: three explosive scatter rings that follow an impact, each a ring of flying fragments and bright speed streaks bursting outward from the center: left, embers and little stars; middle, glass candy shards and glitter; right, flower petals and small leaves. Each effect centered in its own cell and not touching the others, no people, no objects, no text, no letters, no numbers, flat solid black background.
```

## Claude のメモ
- 11/21 しょーくん「数字を敵にぶつけた時の大迫力なエフェクト」。いまは fx-burst（衝撃の輪）と fx-slash（斬撃）
- 取りこむときは fx-numhit-honoka・-minamo・-wakaba（上の段）と fx-scatter-honoka・-minamo・-wakaba（下の段）。黒は明るさで すけに（fx-burst と同じ）。battle-fx.js の hitFx・impactFx で、数字がぶつかった瞬間に重ねる

## Claude の確認（ここは依頼したチャットが書く）
