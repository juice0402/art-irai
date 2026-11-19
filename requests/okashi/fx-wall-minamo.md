# 演出：大技の氷（みなも・画面の下を氷がおおう → ひびが入る → パリーンとわれる）

状態：依頼中
依頼日：2026-11-20
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（画風・塗り・あたたかい光）・`sources/okashi/cards-minamo1.png`（氷と水の色）
大きさ：1536×1024
背景：無地の黒 #000000（光るものなので黒。透明にしなくてよい）
年齢区分：全年齢
保存先：`out/okashi/fx-wall-minamo.png`
ブランチ：`art/okashi-fx-wall-minamo`
点検：左半分と右半分に分かれている／左半分＝そのマスの下のふちから上へ広がる厚い氷と霜の層（マスの左はしから右はしまで・高さはマスの半分くらい・上のふちはとがった氷の結晶のギザギザ・うすい水色と白・すける感じ・きらめき）／右半分の上＝白と水色に光る ひびの線だけ（ガラスがわれたような枝分かれ・横に広い・氷の面は描かない）／右半分の下＝はなれた氷のかけら6つ（3×2・とがった三角やガラスのかけらの形・大きさいろいろ・ふちが水色に光る）／人・物・字が入っていない／背景は無地の黒だけ

## 画像への指示（このまま使う）

1.
```
An effect sheet on a flat solid black background (#000000), matching the reference image in soft anime style with smooth painterly glow, for a cozy sweets shop card game special attack, with wide even spacing so nothing touches. Left half of the image: a thick sheet of ice and frost creeping up from the very bottom edge of the left half to about half of its height, spanning the full width of the left half from its left edge to its right edge, with a jagged top edge of sharp ice crystal spikes, translucent pale aqua and white ice with frosty texture and small bright glints. Right half, upper part: only bright glowing white and pale aqua crack lines, a wide branching crack pattern like shattered glass, thin lines without any ice surface. Right half, lower part: six separate sharp ice shards in a three-by-two grid, angular glass-like fragments of different sizes with softly glowing pale aqua edges, each shard centered in its own cell. No people, no objects, no text, no letters, no numbers, flat solid black background.
```

## Claude のメモ
- 11/20 朝 しょーくん「みなもは氷が画面の下の方を侵食して、ピキピキピキッ、パリーン！みたいなイメージ」（★3の発動・大技の、手前下から吹き出る演出）
- 使い方：fireWall（battle-fx.js）のみなもの形。画面の下から氷の層がせり上がる（transform）→ ひびが3回に分けて入る（ピキ・ピキ・ピキッ＝opacity）→ 層が消えて、かけらが はじけ飛ぶ（パリーン＝transform と opacity）。いまはコードの水の柱と小さなひし形の氷（.aw-ice）
- 取りこみ：手で切って `fx-wall-minamo`（左半分・横480）・`fx-crack-minamo`（右上・横480）・`fx-shard-minamo-1`〜`6`（上限96）。黒い背景は明るさで すけに変える

## Claude の確認（ここは依頼したチャットが書く）
