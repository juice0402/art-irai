# 演出：大技の炎の壁（ほのか・画面の下からメラメラ・2こま）

状態：済
依頼日：2026-11-20
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（画風・塗り・あたたかい光）・`sources/okashi/honoka-battle.png`（炎の色）
大きさ：1536×1024
背景：無地の黒 #000000（光るものなので黒。透明にしなくてよい）
年齢区分：全年齢
保存先：`out/okashi/fx-wall-honoka.png`
ブランチ：`art/okashi-fx-wall-honoka`
点検：左右2つのたて長のマスに分かれていて、まんなかに細い黒のすき間がある／どちらも そのマスの下のふちから上へ燃え上がる炎の壁（マスの左はしから右はしまで・高さはマスの3分の2くらい・下のほうは白っぽい黄色で明るく・上へいくほどオレンジと赤の炎の舌・上に火の粉）／左と右は同じ炎の、舌の形だけちがう2こま／やわらかく光る／人・物・字が入っていない／背景は無地の黒だけ

## 画像への指示（このまま使う）

1.
```
Two tall panels side by side, each filling its own half of the image, separated by a thin vertical strip of plain black in the middle, on a flat solid black background (#000000), matching the reference image in soft anime style with smooth painterly glow and warm lighting, for a cozy sweets shop card game special attack. In each panel, a roaring wall of fire rises from the very bottom edge of that panel up to about two thirds of its height, spanning the full width of the panel from its left edge to its right edge: a bright white-yellow hot glow along the bottom, rich orange flames in the middle, and red flickering flame tongues with glowing embers and small sparks rising above. The two panels show the same fire in two animation frames, with differently shaped flame tongues. Soft glowing light, no smoke. No people, no objects, no text, no letters, no numbers, flat solid black background.
```

## Claude のメモ
- 11/20 朝 しょーくん「ほのかとかみなもの星3発動時の、手前下から吹き出る演出って描き下ろしてないよね？ ほのかはしたからメラメラきて、みなもは氷が画面の下の方を侵食して、ピキピキピキッ、パリーン！みたいなイメージ」
- 使い方：大技（おなかの6割をこえる一撃・★3のズドン）の fireWall（battle-fx.js）。画面の下から炎の壁がせり上がり（transform）、左と右のこまを opacity で入れかえてメラメラ。いまはコードのグラデの炎（.fw-t）
- 取りこみ：左右に切って `fx-wall-honoka-a`・`fx-wall-honoka-b`（横480・黒い背景は明るさで すけに変える＝fx-burst と同じ）

## Claude の確認（ここは依頼したチャットが書く）
- 11/20 朝 合格（PR #167）。mazemaze-okashiya main 32e3e19 に取りこんだ（fx-wall-honoka-a・b 横480・黒い背景は明るさで すけに）。fireWall の炎の壁（せり上がって2こまでメラメラ）
