# タイトル画面の背景：夜のお店の前（縦）

状態：依頼中
依頼日：2026-11-18
依頼したチャット：【okashi】（中身は【okashi-hiru】の H-023）
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/op-shop-night.png`（夜のお店。お店のデザイン・色・灯り・画風をこれにそろえる）
大きさ：1024×1536（縦。ゲームでは 9:16 に左右を少し切る）
背景：絵そのものが背景（緑はいらない）
年齢区分：全年齢
保存先：`out/okashi/title-bg.png`
ブランチ：`art/okashi-title-bg`
点検：参考の絵と同じお店（赤白しましまの日よけ・木の看板・灯りのショーウィンドウ・アーチのドア・ランタン・花の鉢）・同じ画風／縦長で、お店を少し見上げる構図／上の3割は夜空だけ（すみれ色〜こげ茶・青くしない・月と星・左右のすみから木の枝）＝ロゴを置く所なので空いている／3〜6割にお店／下の4割はお店の前の石だたみと草地で、物が置いていない（あたたかい灯りがさす）／大事な物は横のまんなか7割に入っている／人・モンスター・字・光の粒・ぼかしがない

## 画像への指示（このまま使う）

1.
```
A tall vertical game title background, painted in the same soft anime painterly style, colors and warm lighting as the reference image, and showing the same little sweets shop from the reference: red and white striped awning, a plain blank wooden signboard with no letters, a glowing shop window with jars and sweets, an arched wooden door, small lanterns, flower pots. Night at the edge of a forest, seen from the front and slightly from below so the shop feels welcoming and a little grand. Layout from top to bottom: the top 30 percent is open night sky in deep violet fading to warm dark brown (no blue), a soft moon and small stars, tree branches entering from the left and right corners, otherwise empty; from 30 to 60 percent the shop facade, centered; the bottom 40 percent is a cobblestone path and grass in front of the shop, empty, lit warmly by the shop light. Keep all important things inside the middle 70 percent of the width. No people, no animals, no creatures, no text, no letters, no floating light particles, no blur effects.
```

## Claude のメモ
- 11/18 18時 しょーくん「本格的なゲームのスタート画面みたいに」「全パーツ描き下ろしの気合いの入ったトップ画像」→ 昼のチャットの H-023（claude/okashi-hiru.md）
- 取りこむ名前は title-bg（`prep_art.py bg` ではなく縦のまま。縦1080の上限で webp に）。灯りと光の筋の位置は昼のチャットが LG_BG で合わせる
- 来たら op-shop-night はけずってよい

## Claude の確認（ここは依頼したチャットが書く）
- まだ
