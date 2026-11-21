# お店の外観の直し（その2）：ドアを家のまんなかに・カーテンは部屋の中・窓の中はふつうの部屋

状態：済
依頼日：2026-11-21
依頼したチャット：【okashi-hiru】
やり方：編集（元の絵を直す）
元の絵：`sources/okashi/shop-out-3.png`（shop-out-3・窓と鈴は直った。ドアの場所・カーテン・窓の中が不合格）
参考の絵：`sources/okashi/bg-day.png`（お店の中から入口の壁を見た絵。まんなかにドア・左右に同じ窓・カーテンは部屋の中で窓の外がわの端にまとめている）
大きさ：元の絵と同じ
背景：絵ぜんぶ（背景の絵なので緑にしない）
年齢区分：全年齢
保存先：`out/okashi/shop-out-4.png`
ブランチ：`art/okashi-shop-out-4`
点検：ドアのまんなかが、屋根のてっぺんと楕円の看板のまんなかと同じ縦の線の上（ずれは絵の横はばの1%まで）／石の段と飛び石の道もドアのまんなか／左右の窓は同じ大きさで、ドアから同じきょり（左右のちがいは絵の横はばの1%まで）／ランタンはドアの右のかべ／白いカーテンはガラスの内がわ（部屋の中）にあって、ガラスと格子ごしに見える（外のかべや窓わくの手前にない）・各窓の外がわの端でまとめている／窓の中はふつうのあたたかい部屋がぼんやり見えるだけ（ガラスのすぐうしろに棚・びん・物がない・へんな遠近がない）／窓べの内がわに小さな花の鉢が1つずつ（ガラスのうしろ）／ドアの外に鈴がない／ドアのガラス4まい・取っ手は左・屋根・日よけ・看板・花・たる・空・木は元の絵と同じ／字が入っていない

## 画像への指示（このまま使う）

1.
```
Edit the original image. Keep the same shop building, painting style, morning light, sky, trees, roof, the red and white striped awning, the blank oval signboard, the wall lantern, the flower boxes, pots and barrels, the stone step and the stepping-stone path. Make the front of the shop perfectly symmetrical around the vertical center line that runs through the roof peak and the oval signboard: the wooden front door (four glass panes on top, the knob on the left side) stands exactly on that center line, directly under the signboard, and the stone step and the stepping-stone path are centered under the door. The two windows are the same size and the same distance from the door on the left and on the right. The wall lantern stays on the wall just to the right of the door. The windows are simple multi-pane glass windows. The white curtains hang inside the room behind the glass, seen through the glass and the window bars, never on the outside wall or in front of the window frame; each curtain is gathered and tied at the window's outer side. Through the glass you see only a simple, softly lit, warm room interior, slightly out of focus, with no shelves, jars or objects right behind the glass and no strange perspective. One small potted flower stands on each inner window sill, behind the glass. No bell outside the door. No text, no letters anywhere.
```

## Claude のメモ
- shop-out-3 の点検で見つけたずれ（しょーくん）：カーテンが外がわについて見える・ドアがまんなかでない・窓の中がへん
- 合格したら bg-shop-out（960×540）に入れて、この絵をもとに title-bg（夜・たて長）と cg-open（お店の前で看板を見上げるほのか・はしごなし・ドアより小さい）を編集で作る

## Claude の確認（ここは依頼したチャットが書く）
- 11/21 22時すぎ：ドアはまんなかになった（ずれ3px）・窓の中もよい。カーテンと鉢がまだ格子の手前に見えた → しょーくんが「ぽぽちが格子を描き足す」をえらんだ。昼のチャットが格子をカーテンの上まで描き足し、カーテンと鉢をガラスごしにした絵を `sources/okashi/shop-out-4b.png` に置いた → しょーくん合格。mazemaze-okashiya の PR #33 に bg-shop-out として入れた。Codex の PR は閉じる
