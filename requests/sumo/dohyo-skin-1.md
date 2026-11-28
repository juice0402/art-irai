# 土俵スキン その1：藍・若草・桜・夕焼け（上の面の1枚絵4つ＋横の面の帯4本）

状態：済
依頼日：2026-11-28
依頼したチャット：【sumo】
やり方：新しく描く
元の絵：なし
参考の絵：なし
大きさ：1〜4＝1024×1024／5＝1536×1024
背景：1〜4＝なし（画面いっぱいの絵。緑や黒の地は入れない）／5＝帯と帯のあいだだけ無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/sumo/dohyo-skin-1.png`
ブランチ：`art/sumo-dohyo-skin-1`
点検：5段とも別の1枚（段ごとに `dohyo-skin-1_step1.png`〜`_step5.png` で残す・保存先は1段目と同じ絵でよい）／1〜4 は真上から見た平らな面が画面いっぱい（ふち・額・影・かげり・物・字・円や線が入っていない）／まん中は明るく静か（あとで墨の輪と仕切り線をコードで重ねる）・かざりは外がわと四すみに多め／1＝藍の絞り染め・2＝若草の和紙に若草・3＝薄桃の和紙に桜の枝と花びら・4＝夕焼けの色の和紙に雲の帯／5 は横に長い帯4本が上から 藍・若草・桜・夕焼け の順で、帯どうしは緑のすきまで分かれている・帯のまん中は静か（字を重ねる）・かざりは帯の左右のはしに／字・人・実在の印が入っていない

## 画像への指示（このまま使う）

1.
```
A square illustration seen perfectly straight on from above, a flat surface that fills the entire image edge to edge, no border, no frame, no vignette, no shadows, no objects, no text, no letters, no circles or lines drawn on it, even lighting. Japanese handmade paper hand-dyed with indigo using tie-dye folding techniques: deep rich indigo blooms and soft folded ring patterns gather in the four corners and along the outer edges, gradually fading through mid blue to a very pale blue-white in the large calm center. Fine paper fibers visible, soft watercolor-like edges, elegant and refined.
```

2.
```
A square illustration seen perfectly straight on from above, a flat surface that fills the entire image edge to edge, no border, no frame, no vignette, no shadows, no objects, no text, no letters, no circles or lines drawn on it, even lighting. Japanese handmade paper dyed a pale fresh spring green, with delicate young grass blades and small sprouts painted in soft green and yellow-green watercolor, growing densely in the four corners and along the outer edges and thinning out toward the large pale calm center. Fine paper fibers visible, airy and refined.
```

3.
```
A square illustration seen perfectly straight on from above, a flat surface that fills the entire image edge to edge, no border, no frame, no vignette, no shadows, no objects, no text, no letters, no circles or lines drawn on it, even lighting. Japanese handmade paper dyed a pale blush pink, a slender flowering cherry branch with soft pink and white blossoms reaching in from the upper left corner and a smaller one from the lower right corner, many loose petals drifting across the sheet, denser near the edges and sparse in the large light center. Painted in a refined traditional Japanese style with soft gradients, fine paper fibers visible.
```

4.
```
A square illustration seen perfectly straight on from above, a flat surface that fills the entire image edge to edge, no border, no frame, no vignette, no shadows, no objects, no text, no letters, no circles or lines drawn on it, even lighting. Japanese handmade paper dyed in a sunset gradient, pale warm apricot in the large calm center deepening to soft coral and vermilion toward the corners, with long thin horizontal bands of stylized clouds edged in muted gold near the top and bottom edges, and a few tiny flying bird silhouettes near one upper corner. Fine paper fibers visible, warm and refined.
```

5.
```
Four separate long horizontal strips stacked vertically, each strip spanning the full width of the image and about one quarter of its height, separated from each other by thin bands of plain flat pure green #00FF00, seen straight on, flat, no shadows, no text, no letters, no frame around the image. Each strip is the side panel of a low paper box, with its decoration only near the left and right ends and a calm plain area in the middle. From top to bottom: 1) indigo tie-dyed paper, deep indigo at both ends fading to pale blue in the middle; 2) pale spring green paper with young grass blades rising at both ends; 3) pale blush pink paper with small cherry blossoms and petals at both ends; 4) sunset gradient paper, apricot in the middle to coral at both ends, with a thin gold cloud band at each end. Fine paper fibers visible on every strip.
```

## Claude のメモ
- 使い道：sumo の福箱から出る土俵スキン（見た目だけ）。並＝藍・若草／上＝桜・夕焼け。src/data/dohyo.js の top（上の面の1枚絵）と side（横の面）
- 上の面は 1024 の正方形のまま使い、墨の輪（中心から約92%）と仕切り線をコードで重ねる。横の面は 4:1（緑のすきまで切る）。横の面のまん中には決着の説明をコードで書く
- 取りこむときは、輪を重ねた見本と、取組の真横のカメラで確かめる

## Claude の確認（ここは依頼したチャットが書く）
- 合格（11/28）。ぜんぶ取りこんだ（sumo-game PR #20・assets/art/dohyo-*-top・-side。細長い帯は左右のはしを残してまん中でつないだ）
