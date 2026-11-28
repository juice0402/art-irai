# 巡業の特殊土俵 その2：ばね・ぬかるみ・小刻み・大うねり（上の面の1枚絵4つ＋横の面の帯4本）

状態：依頼中
依頼日：2026-11-28
依頼したチャット：【sumo】
やり方：新しく描く
元の絵：なし
参考の絵：なし
大きさ：1〜4＝1024×1024／5＝1536×1024
背景：1〜4＝なし（画面いっぱいの絵。緑や黒の地は入れない）／5＝帯と帯のあいだだけ無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/sumo/tokushu-2.png`
ブランチ：`art/sumo-tokushu-2`
点検：5段とも別の1枚（`tokushu-2_step1.png`〜`_step5.png`）／1〜4 は真上から見た平らな面が画面いっぱい（ふち・額・影・物・字・円や線が入っていない）／まん中は少し静か（あとで墨の輪と仕切り線をコードで重ねる）／1＝太鼓の皮と鋲・2＝ぬれた泥と水たまり・3＝細かい竹の網代編み・4＝大きなうねりの波（伝統的な波の絵の型・ほかの作品のまねでない）／5 は横に長い帯4本が上から ばね・ぬかるみ・小刻み・大うねり の順・帯どうしは緑のすきまで分かれている・どの帯も左右のはしが、並べるとつながる（もようは帯の長さ全体に同じように続く）／人・字・実在の印なし

## 画像への指示（このまま使う）

1.
```
A square illustration seen perfectly straight on from above, a flat surface that fills the entire image edge to edge, no border, no frame, no vignette, no cast shadows, no objects, no text, no letters, no circles or lines drawn on it, even lighting. The taut drumhead of a large Japanese festival drum: stretched cream-colored hide with soft natural mottling and faint translucent fibers, a neat ring of round brass tacks running close along the outer edges, the hide a little darker and more worn toward the edges and smooth, bright and calm in the center. Bouncy, festive and finely detailed.
```

2.
```
A square illustration seen perfectly straight on from above, a flat surface that fills the entire image edge to edge, no border, no frame, no vignette, no cast shadows, no objects, no text, no letters, no circles or lines drawn on it, even lighting. Thick wet mud of a rainy training ground: glossy dark chocolate-brown mud with smooth shallow puddles that softly reflect a pale sky, a few strands of golden straw and small ripples toward the edges and corners, the center a little smoother and calmer. Squishy, heavy and detailed.
```

3.
```
A square illustration seen perfectly straight on from above, a flat surface that fills the entire image edge to edge, no border, no frame, no vignette, no cast shadows, no objects, no text, no letters, no circles or lines drawn on it, even lighting. A finely woven bamboo mat in warm honey and light tan tones, a tight small diamond and checker weave of thin bamboo strips repeated evenly across the whole surface, with slightly darker strips framing the outer edges. Crisp, rhythmic and finely detailed.
```

4.
```
A square illustration seen perfectly straight on from above, a flat surface that fills the entire image edge to edge, no border, no frame, no vignette, no cast shadows, no objects, no text, no letters, no circles or lines drawn on it, even lighting. Stylized rolling ocean swells in a traditional Japanese painting style: deep indigo and blue waves with white curling foam crests, the big swells and spray rising from the four edges and corners, flattening into calmer long gentle ripples toward the center. Bold, flowing and finely detailed.
```

5.
```
Four separate long horizontal strips stacked vertically, each strip spanning the full width of the image and about one quarter of its height, separated from each other by thin bands of plain flat pure green #00FF00, seen straight on, flat, no shadows, no text, no letters, no frame around the image. Each strip is the side face of a thick block and its texture continues evenly along the whole length, so that the left edge and the right edge of every strip join without a visible seam when repeated side by side. From top to bottom: 1) the side of a big festival drum, glossy red lacquered wood with a row of round brass tacks along the top and bottom edges; 2) layers of dark brown mud and clay with strands of straw and a few drips; 3) tight vertical bamboo slats bound with dark cord bands at regular intervals; 4) rolling indigo waves with white foam crests flowing along the band.
```

## Claude のメモ
- 使い道：sumo の土俵巡業の特殊土俵（物理が変わる土俵）の見た目。src/data/dohyo.js の top.img（上の面の1枚絵）・side.img（横の面＝横にくり返して貼る・side.tile）。ばね（bane）・ぬかるみ（nukarumi）・小刻み（kokizami）・大うねり（oouneri）＝夜 #19 で足す土俵
- 上の面は墨の輪（中心から約92%）と仕切り線をコードで重ねる。取りこむときは、輪を重ねた見本と取組の真横のカメラで確かめ、帯は横に2本並べてつなぎ目を見る

## Claude の確認（ここは依頼したチャットが書く）
- まだ
