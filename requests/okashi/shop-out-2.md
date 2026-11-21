# お店の外観の描きなおし：中（昼の販売）と同じ形で、大きめの家に

状態：依頼中
依頼日：2026-11-21
依頼したチャット：【okashi-hiru】
やり方：編集（元の絵を直す）
元の絵：`sources/okashi/bg-shop-out.png`
参考の絵：`sources/okashi/bg-day.png`（お店の中＝カウンターのうしろから入口の壁を見た絵。この壁の形を外から見た形にする）
大きさ：1536×1024
背景：絵ぜんぶ（背景の絵なので緑にしない）
年齢区分：全年齢
保存先：`out/okashi/shop-out-2.png`（各段は `out/okashi/shop-out-2_step1.png`・`_step2.png`）
ブランチ：`art/okashi-shop-out-2`
点検：空・遠くの町・木・柵・石の道・花・光は元の絵のまま／建物の正面が中の絵と同じ（まんなかに木のドア1つ・ドアの上半分に小さなガラス窓・ドアの左右に同じ大きさの格子窓が1つずつで左右対称・窓に白いカーテン）／元の絵より横に広く大きな家／ドアは人がふつうに通れる大きさ（家の正面の壁の高さはドアの約1.6倍・屋根までふくめて約2.5倍）／赤い瓦屋根・赤と白のしましまの日よけ・まんなかの楕円の看板（字なし）・ランタンはそのまま／人がいない／字が入っていない

## 画像への指示（このまま使う）

1.
```
Edit the original image. Keep the same soft anime painterly style, the same sunrise sky, the distant hill town, the trees, the wooden fence, the stone path, the flowers and the warm morning light exactly as they are. Change only the shop building: make it a wider and larger cozy single-story wooden pastry shop whose front wall has the same layout as the inside wall shown in the second reference image: one wooden front door in the exact center with small glass panes in its upper half and a small brass bell, and one large multi-pane window with white curtains on each side of the door, the same size on the left and on the right, perfectly symmetrical. The door is a normal full-size door that an adult walks through comfortably; the front wall is about 1.6 times as tall as the door, and the top of the roof is about 2.5 times as tall as the door. Keep the red tiled roof, a red-and-white striped awning across the front above the windows and the door, a blank oval wooden signboard centered above the door, a hanging lantern beside the door, flower pots and a low stone step in front of the door. Through the windows you can see warm light and glass jars of sweets on shelves inside. No people. The signboard is blank. No text, no letters anywhere.
```

2.
```
Edit the original image. Keep the same soft anime painterly style, the same sunrise sky, the distant hill town, the trees, the wooden fence, the stone path, the flowers and the warm morning light. Change only the shop building, and show it from a little farther away so the whole building fits comfortably in the picture: a wider and larger cozy single-story wooden pastry shop whose front wall has the same layout as the inside wall shown in the second reference image: one wooden front door in the exact center with small glass panes in its upper half and a small brass bell, and one large multi-pane window with white curtains on each side of the door, the same size on the left and on the right, perfectly symmetrical. The door is a normal full-size door that an adult walks through comfortably; the front wall is about 1.6 times as tall as the door, and the top of the roof is about 2.5 times as tall as the door. Keep the red tiled roof, a red-and-white striped awning across the front above the windows and the door, a blank oval wooden signboard centered above the door, a hanging lantern beside the door, flower pots and a low stone step in front of the door. Through the windows you can see warm light and glass jars of sweets on shelves inside. No people. The signboard is blank. No text, no letters anywhere.
```

## Claude のメモ
- 11/21 しょーくん「挿絵の家の整合性は合ってるけど、お昼の販売シーンのレイアウトと外装のレイアウトが合ってない」「ほのかが大きすぎるか、家が小さすぎる。トリックアートみたい」→ えらぶ質問で「外を中に合わせる」
- 前の外観は「左に大きな飾り窓・右にドア」の小さな家。中（bg-day・cg-three）は「まんなかにドア・両わきに窓」の広いお店
- 1＝元の絵と同じ近さ／2＝少し引いて家ぜんぶ。しょーくんがえらぶ
- 合格した絵をもとに、つぎに title-bg（夜・たて長）と cg-open（看板をかけるほのか・正しい大きさ）を編集で作る
- 取りこみ：16:9 に切って bg-shop-out（960×540）。プロローグの看板の字の場所は、リーダーの flow.js・style-talk.css で合わせなおす

## Claude の確認（ここは依頼したチャットが書く）
- まだ
