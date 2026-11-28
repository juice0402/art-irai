# 巡業の特殊土俵 その3：押し・疾風・狭小（上の面の1枚絵3つ＋横の面の帯3本）

状態：依頼中
依頼日：2026-11-28
依頼したチャット：【sumo】
やり方：新しく描く
元の絵：なし
参考の絵：なし
大きさ：1〜3＝1024×1024／4＝1536×1024
背景：1〜3＝なし（画面いっぱいの絵。緑や黒の地は入れない）／4＝帯と帯のあいだだけ無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/sumo/tokushu-3.png`
ブランチ：`art/sumo-tokushu-3`
点検：4段とも別の1枚（`tokushu-3_step1.png`〜`_step4.png`）／1〜3 は真上から見た平らな面が画面いっぱい（ふち・額・影・物・字・円や線が入っていない）／まん中は少し静か（あとで墨の輪と仕切り線をコードで重ねる）／1＝欅の厚板と鉄の金具・2＝疾風の筆の流れと舞う葉・3＝檜の小さな箱のふた（ふちに焼きの線）／4 は横に長い帯3本が上から 押し・疾風・狭小 の順・帯どうしは緑のすきまで分かれている・どの帯も左右のはしが、並べるとつながる（もようは帯の長さ全体に同じように続く）／人・字・実在の印なし

## 画像への指示（このまま使う）

1.
```
A square illustration seen perfectly straight on from above, a flat surface that fills the entire image edge to edge, no border, no frame, no vignette, no cast shadows, no objects, no text, no letters, no circles or lines drawn on it, even lighting. Thick heavy planks of zelkova wood laid side by side, rich warm brown with strong flowing grain and knots, dark iron corner fittings with round rivets in the four corners, the planks a bit worn and scuffed toward the edges and smoother in the center. Sturdy, powerful and finely detailed.
```

2.
```
A square illustration seen perfectly straight on from above, a flat surface that fills the entire image edge to edge, no border, no frame, no vignette, no cast shadows, no objects, no text, no letters, no circles or lines drawn on it, even lighting. Pale green-white Japanese paper swept by a strong gale: swirling ink-brush wind streaks in soft green and grey curving in from the edges and corners, with fresh green leaves and a few small maple leaves flying along the streaks, the center lighter and calmer. Fast, airy and finely detailed.
```

3.
```
A square illustration seen perfectly straight on from above, a flat surface that fills the entire image edge to edge, no border, no frame, no vignette, no cast shadows, no objects, no text, no letters, no circles or lines drawn on it, even lighting. Smooth light hinoki cypress wood with fine straight pale grain, like the top of a small square wooden box, with a thin darker burned border line running close along all four edges and neat joined corners, the center plain and calm. Clean, compact and finely detailed.
```

4.
```
Three separate long horizontal strips stacked vertically, each strip spanning the full width of the image and about one quarter of its height, separated from each other by thin bands of plain flat pure green #00FF00, seen straight on, flat, no shadows, no text, no letters, no frame around the image. Each strip is the side face of a thick block and its texture continues evenly along the whole length, so that the left edge and the right edge of every strip join without a visible seam when repeated side by side. From top to bottom: 1) heavy horizontal wooden beams with strong grain held by dark iron straps with rivets at regular intervals; 2) pale green-white paper with swirling green and grey wind streaks and flying leaves flowing along the band; 3) light hinoki wood planks with fine straight grain and neat interlocking joints at regular intervals.
```

## Claude のメモ
- 使い道：sumo の土俵巡業の特殊土俵（物理が変わる土俵）の見た目。src/data/dohyo.js の top.img（上の面の1枚絵）・side.img（横の面＝横にくり返して貼る・side.tile）。押し（oshi）・疾風（hayate）・狭小（kyosho）＝夜 #19 で足す土俵。狭小は土俵がせまいので、上の面の絵は縮めて貼る
- 上の面は墨の輪（中心から約92%）と仕切り線をコードで重ねる。取りこむときは、輪を重ねた見本と取組の真横のカメラで確かめ、帯は横に2本並べてつなぎ目を見る

## Claude の確認（ここは依頼したチャットが書く）
- まだ
