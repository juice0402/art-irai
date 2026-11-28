# 土俵スキン その2：漆・墨流し・金屏風（上の面の1枚絵3つ＋横の面の帯3本）

状態：依頼中
依頼日：2026-11-28
依頼したチャット：【sumo】
やり方：新しく描く
元の絵：なし
参考の絵：なし
大きさ：1〜3＝1024×1024／4＝1536×1024
背景：1〜3＝なし（画面いっぱいの絵。緑や黒の地は入れない）／4＝帯と帯のあいだだけ無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/sumo/dohyo-skin-2.png`
ブランチ：`art/sumo-dohyo-skin-2`
点検：4段とも別の1枚（段ごとに `dohyo-skin-2_step1.png`〜`_step4.png` で残す・保存先は1段目と同じ絵でよい）／1〜3 は真上から見た平らな面が画面いっぱい（ふち・額・影・かげり・物・字・円や線が入っていない）／まん中は静か（あとで輪と仕切り線をコードで重ねる）・かざりは外がわと四すみに多め／1＝黒に近い漆に金の蒔絵（秋草と月）・2＝墨流しの渦・3＝金箔の升目に金雲／4 は横に長い帯3本が上から 漆・墨流し・金屏風 の順で、帯どうしは緑のすきまで分かれている・帯のまん中は静か（字を重ねる）・かざりは帯の左右のはしに／字・人・実在の印が入っていない

## 画像への指示（このまま使う）

1.
```
A square illustration seen perfectly straight on from above, a flat surface that fills the entire image edge to edge, no border, no frame, no vignette, no cast shadows, no objects, no text, no letters, no circles or lines drawn on it, even lighting. A glossy deep black lacquer surface with a faint warm red undertone, decorated in traditional Japanese gold lacquer sprinkled-gold technique: elegant autumn grasses, bush clover and a few small crescent moons in gold and soft red gold in the four corners and along the outer edges, with fine gold dust scattered sparsely and fading away toward the large deep dark calm center. Luxurious and refined, subtle lacquer sheen without strong highlights.
```

2.
```
A square illustration seen perfectly straight on from above, a flat surface that fills the entire image edge to edge, no border, no frame, no vignette, no shadows, no objects, no text, no letters, no circles or lines drawn on it, even lighting. Japanese marbled ink paper made by floating ink on water: large flowing concentric swirls and gently rippling bands of grey, soft black and a hint of indigo on warm cream paper, the swirls richest near the edges and corners and opening up into lighter, wider, calmer rings toward the center. Fine paper fibers visible, organic and elegant.
```

3.
```
A square illustration seen perfectly straight on from above, a flat surface that fills the entire image edge to edge, no border, no frame, no vignette, no cast shadows, no objects, no text, no letters, no circles or lines drawn on it, even lighting. The surface of a traditional Japanese gold folding screen: square sheets of gold leaf laid in a neat grid with faint seams and slight variations of warm gold tone, raised stylized gold clouds in long horizontal bands crossing near the top and bottom edges and curling into the corners, the center an even calm field of gold leaf squares. Rich and luxurious but evenly lit, no glare.
```

4.
```
Three separate long horizontal strips stacked vertically, each strip spanning the full width of the image and about one quarter of its height, separated from each other by bands of plain flat pure green #00FF00, seen straight on, flat, no shadows, no text, no letters, no frame around the image. Each strip is the side panel of a low box, with its decoration only near the left and right ends and a calm plain area in the middle. From top to bottom: 1) glossy deep red-black lacquer with small gold sprinkled-lacquer autumn grasses at both ends and a thin gold line along the top and bottom edges; 2) cream paper with grey and soft black marbled ink swirls at both ends, plain cream in the middle; 3) gold leaf squares in a grid with a stylized gold cloud curling at each end.
```

## Claude のメモ
- 使い道：sumo の福箱から出る土俵スキン（見た目だけ）。特上＝漆・墨流し／極＝金屏風。src/data/dohyo.js の top（上の面の1枚絵）と side（横の面）
- 漆は輪が朱・仕切り線が生成り、金屏風は輪が墨（コードで重ねる）。横の面のまん中には決着の説明をコードで書く（漆は生成りの字）
- 取りこむときは、輪を重ねた見本と、取組の真横のカメラで確かめる

## Claude の確認（ここは依頼したチャットが書く）
- まだ
