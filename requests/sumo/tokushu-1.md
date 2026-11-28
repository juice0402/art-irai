# 巡業の特殊土俵 その1：氷・激震・月・重石（上の面の1枚絵4つ＋横の面の帯4本）

状態：依頼中
依頼日：2026-11-28
依頼したチャット：【sumo】
やり方：新しく描く
元の絵：なし
参考の絵：なし
大きさ：1〜4＝1024×1024／5＝1536×1024
背景：1〜4＝なし（画面いっぱいの絵。緑や黒の地は入れない）／5＝帯と帯のあいだだけ無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/sumo/tokushu-1.png`
ブランチ：`art/sumo-tokushu-1`
点検：5段とも別の1枚（`tokushu-1_step1.png`〜`_step5.png`）／1〜4 は真上から見た平らな面が画面いっぱい（ふち・額・影・物・字・円や線が入っていない）／まん中は少し静か（あとで墨の輪と仕切り線をコードで重ねる）／1＝氷の板と霜・2＝ひびの入った乾いた土・3＝月の砂と小さなくぼみ・4＝重い御影石／5 は横に長い帯4本が上から 氷・激震・月・重石 の順・帯どうしは緑のすきまで分かれている・どの帯も左右のはしが、並べるとつながる（もようは帯の長さ全体に同じように続く）／人・字・実在の印なし

## 画像への指示（このまま使う）

1.
```
A square illustration seen perfectly straight on from above, a flat surface that fills the entire image edge to edge, no border, no frame, no vignette, no cast shadows, no objects, no text, no letters, no circles or lines drawn on it, even lighting. The top of a thick slab of clear pale blue ice: cool translucent blues and whites, faint trapped air bubbles and a few hairline cracks, delicate white frost crystals growing in from the four corners and edges, a light dusting of powder snow, the center slightly clearer and calmer. Crisp, cold and beautiful, painted with fine detail.
```

2.
```
A square illustration seen perfectly straight on from above, a flat surface that fills the entire image edge to edge, no border, no frame, no vignette, no cast shadows, no objects, no text, no letters, no circles or lines drawn on it, even lighting. Hard-packed dry earth of a training ground, warm ochre and clay brown, split by bold dark cracks that spread outward from the edges and corners like after a strong earthquake, small loose pebbles and crumbs of earth along the cracks, the center a little smoother and calmer. Earthy, powerful and detailed.
```

3.
```
A square illustration seen perfectly straight on from above, a flat surface that fills the entire image edge to edge, no border, no frame, no vignette, no cast shadows, no objects, no text, no letters, no circles or lines drawn on it, even lighting. A pale silvery moon surface: soft grey-white fine dust with gentle shallow round craters of different sizes, larger ones toward the corners and edges and only tiny faint ones in the calmer center, a faint cool blue tint and a few sparkling silver specks. Quiet, dreamy and elegant, finely detailed.
```

4.
```
A square illustration seen perfectly straight on from above, a flat surface that fills the entire image edge to edge, no border, no frame, no vignette, no cast shadows, no objects, no text, no letters, no circles or lines drawn on it, even lighting. The top of a single massive slab of dark grey speckled granite, polished in the center and rougher, chiseled and slightly chipped toward the edges and corners, with natural black, white and grey mineral flecks. Heavy, solid and detailed.
```

5.
```
Four separate long horizontal strips stacked vertically, each strip spanning the full width of the image and about one quarter of its height, separated from each other by thin bands of plain flat pure green #00FF00, seen straight on, flat, no shadows, no text, no letters, no frame around the image. Each strip is the side face of a thick block and its texture continues evenly along the whole length, so that the left edge and the right edge of every strip join without a visible seam when repeated side by side. From top to bottom: 1) the side of a thick ice block, translucent blue layers with trapped bubbles and frost along the top edge; 2) the side of a block of earth, horizontal layers of ochre and brown soil with small stones and a few dark cracks; 3) pale silver-grey moon rock in soft horizontal layers with tiny craters and silver specks; 4) a wall of large dark grey granite blocks laid in rows with fine chiseled joints.
```

## Claude のメモ
- 使い道：sumo の土俵巡業の特殊土俵（物理が変わる土俵）の見た目。src/data/dohyo.js の top.img（上の面の1枚絵）・side.img（横の面＝横にくり返して貼る）。氷（kori）・激震（gekishin）・月・重石（夜 #19 で足す土俵）
- 上の面は墨の輪（中心から約92%）と仕切り線をコードで重ねる。狭小などで土俵の大きさが変わっても、上の面は1枚のまま縮める・横の帯はくり返す
- 取りこむときは、輪を重ねた見本と取組の真横のカメラで確かめ、帯は横に2本並べてつなぎ目を見る

## Claude の確認（ここは依頼したチャットが書く）
- まだ
