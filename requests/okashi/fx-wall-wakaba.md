# 演出：大技の若葉の壁（わかば・画面の下から つると葉と花が いっせいにのびる・前と奥の2まい）

状態：済
依頼日：2026-11-20
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（画風・塗り・あたたかい光）・`sources/okashi/cards-wakaba1.png`（若葉と花の色）
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/fx-wall-wakaba.png`
ブランチ：`art/okashi-fx-wall-wakaba`
点検：左右2つのたて長のマスに分かれていて、まんなかに細いすき間がある／左＝前の層：マスの下のふちから のびる大きな葉と若いつると、白とピンクの花がぎっしり（マスの左はしから右はしまで・高さはマスの半分くらい・下のふちはまっすぐ）／右＝奥の層：同じ下のふちから、細いつると芽とつぼみが高くのびる（高さはマスの4分の3くらい・明るい若葉色・少しまばら）／人・物・字が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
Two tall panels side by side, each filling its own half of the image, separated by a thin vertical gap of plain background in the middle, matching the reference image in soft anime style with smooth painterly shading and warm lighting, for a cozy sweets shop card game special attack. Left panel, the front layer: a dense lush wall of big fresh leaves, young curling vines and blooming white and pink flowers growing up from the very bottom edge of the panel to about half of its height, spanning the full width of the panel from its left edge to its right edge, the bottom edge straight and full. Right panel, the back layer: slender light green vines, sprouts and small flower buds growing tall from the very bottom edge of the panel up to about three quarters of its height, spanning the full width of the panel, a little more open and airy. No people, no objects, no text, no letters, no numbers. No shadow on the background, flat solid green background (#00FF00).
```

## Claude のメモ
- 11/20 朝 しょーくん「ほのかとかみなもの星3発動時の、手前下から吹き出る演出って描き下ろしてないよね？」（わかばも、いまはコードの つる .fwall.leaf なので いっしょに頼む）
- 使い方：fireWall（battle-fx.js）のわかばの形。奥の層が先に、前の層があとから 画面の下から せり上がる（transform）。葉と花びらが舞うのは いまの fx-wakaba の絵
- 取りこみ：左右に切って `fx-wall-wakaba-front`・`fx-wall-wakaba-back`（横480・若葉が緑に近いので `--strict`）

## Claude の確認（ここは依頼したチャットが書く）
- 11/20 朝 合格（PR #166）。mazemaze-okashiya main 32e3e19 に取りこんだ（fx-wall-wakaba-front・back 横480・--strict・まんなかの細い線は切った）。fireWall（奥 → 前の順にのびる）
