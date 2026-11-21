# お店の外観の直し：窓を中（昼の販売）の窓と同じ形に

状態：不合格（→ shop-out-4）
依頼日：2026-11-21
依頼したチャット：【okashi-hiru】
やり方：編集（元の絵を直す）
元の絵：`sources/okashi/shop-out-2b.png`（shop-out-2 の2まいめ・しょーくんがえらんだ）
参考の絵：`sources/okashi/bg-day.png`（お店の中から入口の壁を見た絵。窓は格子のガラス窓で、外がわの端にだけ白いカーテンをまとめていて、窓べに小さな花の鉢が1つ）
大きさ：元の絵と同じ
背景：絵ぜんぶ（背景の絵なので緑にしない）
年齢区分：全年齢
保存先：`out/okashi/shop-out-3.png`
ブランチ：`art/okashi-shop-out-3`
点検：変わるのは左右の窓とドアの外の鈴だけ／窓のすぐ内がわに棚・ガラスびん・ランプがない／窓は格子のガラスで、中はあたたかくほの明るい部屋がぼんやり見える／白いカーテンは各窓の外がわの端にだけ（左の窓は左端・右の窓は右端）／窓べの内がわに小さな花の鉢が1つずつ／ドアの外の鈴がない／ドア・取っ手（左）・ドアのガラス4まい・屋根・日よけ・看板・ランタン・花・石の道・空・木は元の絵のまま／字が入っていない

## 画像への指示（このまま使う）

1.
```
Edit the original image. Change only the two front windows and remove the small brass bell hanging outside next to the door. Keep everything else exactly the same: the door with its four glass panes and the knob on the left, the roof, the striped awning, the blank oval signboard, the lantern, the flower boxes and pots, the stone step and path, the sky, the trees and the light. The two windows become simple multi-pane glass windows like the windows in the reference image: no shelves, no glass jars and no lamps right behind the glass. Through the glass you see only a softly lit, warm shop interior in the distance. Each window has a white curtain gathered and tied only at its outer edge (the left window on its left side, the right window on its right side), and one small potted flower on the inner window sill. Both windows stay the same size and perfectly symmetrical. No text, no letters anywhere.
```

## Claude のメモ
- shop-out-2 の点検で見つけたずれ：窓の内がわに棚とびんが並んでいる（中の窓は森が見える窓で、棚は横の壁）・ドアの外に鈴（中の絵の鈴はドアの内がわ）
- 合格したら bg-shop-out（960×540）に入れて、この絵をもとに title-bg（夜・たて長）と cg-open（看板をかけるほのか・正しい大きさ）を編集で作る

## Claude の確認（ここは依頼したチャットが書く）
- 11/21 22時 不合格（しょーくん）：白いカーテンが家の外がわについて見える／ドアが家のまんなかにない（屋根のてっぺんと看板より約27px左・ドアから左の窓まで57px・右の窓まで107px）／窓から見える中がへん（ふつうの部屋の中でよい）→ この絵をもとに shop-out-4 で直す。Codex の PR は閉じる
