# 一番最初の場面の背景：新しい外観の朝（縦）

状態：依頼中
依頼日：2026-11-22
依頼したチャット：【okashi-hiru】
やり方：編集（元の絵の夜のたて長を、そのままの割りつけで朝にする）
元の絵：`sources/okashi/title-bg-2b.png`（新しい外観の夜のたて長・しょーくん合格。お店の形・大きさ・場所と、空・お店・道の割りつけはこの絵のとおり）
参考の絵：`sources/okashi/shop-out-4b.png`（同じお店の朝・しょーくん合格。朝の光・空・木の葉・草の色をこれにそろえる）
大きさ：1024×1536（縦。ゲームでは 720×1080）
背景：絵そのものが背景（緑はいらない）
年齢区分：全年齢
保存先：`out/okashi/bg-shop-out-tall.png`
ブランチ：`art/okashi-bg-shop-out-tall`
点検：お店が元の絵と同じ形・大きさ・場所（ドアは家のまんなかで屋根のてっぺんと楕円の看板の真下・ドアのガラス4まいで取っ手は左・左右に同じ格子の窓・白いカーテンと花の鉢は窓のガラスの内がわ＝格子がカーテンの手前を通る・ドアの右にランタン・赤白しましまの日よけ・字のない楕円の看板・花の箱と鉢とたる・石の段と飛び石）／朝（参考の絵の空と光・左から朝の日ざし・青を強くしない）・窓とドアのガラスの中は明るいお部屋がぼんやり（昼の空や雲を映さない）／上の3割は朝の空（左右のすみから木の枝）／3〜6割にお店ぜんぶ／下の4割はお店の前の飛び石と草地で、物が置いていない／大事な物は横のまんなか7割に入る／人・動物・モンスター・字・光の粒・ぼかしがない

## 画像への指示（このまま使う）

1.
```
Change the time of day in the original image from night to early morning, keeping everything else exactly as it is: the same tall portrait framing, the same size and position of the shop, and the same layout from top to bottom (sky in the top 30 percent with tree branches entering from the left and right corners, the whole shop front from 30 to 60 percent, the stepping-stone path and grass in the bottom 40 percent). Keep the shop building exactly as it is: the wooden front door in the exact center under the roof peak and the blank oval wooden signboard, four glass panes on the door with the knob on the left, the two identical multi-pane windows on the left and right with white curtains and small flower pots seen behind the glass (the window bars pass in front of the curtains), the wall lantern just right of the door, the red and white striped awning, the flower boxes, pots and barrels, the stone step and the stepping-stone path. Match the morning colors and light of the reference image: a soft warm morning sky in peach, cream and pale pink with a few light clouds (no strong blue), fresh yellow-green leaves on the branches, bright green grass, gentle golden sunlight coming from the left and casting soft shadows to the right. Through the windows and the door glass you can see a softly lit cozy room interior, slightly hazy; do not show sky or clouds in the door glass. Same soft anime painterly style. No people, no animals, no creatures, no text, no letters, no floating light particles, no blur effects.
```

## Claude のメモ
- 一番最初の場面（プロローグ）は、横長の bg-shop-out を画面の高さいっぱいに出しているので、新しい外観だとドアのまわりしか見えずアップになる（11/22 しょーくん「すごくアップに見える」）→ タイトルと同じたて長の朝の絵で、お店ぜんぶが見えるようにする（しょーくんがえらんだ）
- 取りこむ名前は bg-shop-out-tall（縦のまま・720×1080）。プロローグの画面（flow.js・style-talk.css）はリーダーの持ち物なので、つなぎ方と看板の字の位置は昼のチャットが測って、リーダーへのお願いで出す

## Claude の確認（ここは依頼したチャットが書く）
- まだ
