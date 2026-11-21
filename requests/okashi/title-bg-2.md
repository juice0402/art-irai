# タイトル画面の背景の描きなおし：新しい外観の夜（縦）

状態：依頼中
依頼日：2026-11-21
依頼したチャット：【okashi-hiru】
やり方：編集（元の絵のお店を、そのまま夜のたて長の絵にする）
元の絵：`sources/okashi/shop-out-4b.png`（新しい外観・しょーくん合格。お店の形はこの絵のとおり）
参考の絵：`sources/okashi/title-bg-old.png`（前のタイトルの背景。夜の色・灯り・縦の割りつけをこれにそろえる。お店の形はまねしない）
大きさ：1024×1536（縦。ゲームでは 720×1080）
背景：絵そのものが背景（緑はいらない）
年齢区分：全年齢
保存先：`out/okashi/title-bg-2.png`
ブランチ：`art/okashi-title-bg-2`
点検：お店が元の絵と同じ（ドアは家のまんなかで屋根のてっぺんと楕円の看板の真下・ドアのガラス4まいで取っ手は左・左右に同じ格子の窓・白いカーテンと花の鉢は窓のガラスの内がわ・ドアの右にランタン・赤白しましまの日よけ・字のない楕円の看板・花の箱と鉢とたる・石の段と飛び石）／夜（すみれ色〜こげ茶の空・青くしない・月と星）・窓とドアのガラスとランタンがあたたかく光る・地面にも光がさす／上の3割は夜空だけ（左右のすみから木の枝）／3〜6割にお店ぜんぶ（正面から少し見上げる）／下の4割はお店の前の飛び石と草地で、物が置いていない／大事な物は横のまんなか7割に入る／人・動物・モンスター・字・光の粒・ぼかしがない

## 画像への指示（このまま使う）

1.
```
Turn the original image into a tall vertical game title background (portrait, 2:3), keeping the shop building exactly as it is in the original image: the wooden front door in the exact center under the roof peak and the blank oval wooden signboard, four glass panes on the door with the knob on the left, the two identical multi-pane windows on the left and right with white curtains and small flower pots seen behind the glass, the wall lantern just right of the door, the red and white striped awning, the flower boxes, pots and barrels, the stone step and the stepping-stone path. Change the time to night, matching the colors and mood of the second reference image: deep violet sky fading to warm dark brown (no blue), a soft moon and small stars; warm golden light glows from the two windows, the door glass and the lantern, and spills onto the ground in front. Layout from top to bottom: the top 30 percent is open night sky with tree branches entering from the left and right corners, otherwise empty; from 30 to 60 percent the whole shop front, centered, seen from the front and slightly from below; the bottom 40 percent is the stepping-stone path and grass in front of the shop, empty, lit warmly by the shop light. Keep all important things inside the middle 70 percent of the width. Same soft anime painterly style. No people, no animals, no creatures, no text, no letters, no floating light particles, no blur effects.
```

## Claude のメモ
- 外観を中に合わせて描きなおした（shop-out-4b）ので、タイトルのお店もそろえる（11/21 しょーくん「外を中に合わせて大きく描きなおす」）
- 取りこむ名前は title-bg（縦のまま・縦1080）。灯り・光の筋の場所は昼のチャットが logo.js の LG_BG で合わせる。手前のかざり title-fore と3人（左23%・まんなか50%・右77%）の立ち位置はそのまま
- 合格したら sources/okashi/title-bg-old.png はけずってよい

## Claude の確認（ここは依頼したチャットが書く）
- まだ
