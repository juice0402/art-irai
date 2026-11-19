# UI：ギンガムの布（朝の材料だな・天板・レシピ帳の下）

状態：依頼中
依頼日：2026-11-19
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（画風・塗り・あたたかい光）・`sources/okashi/ui-now3.png`（いまの画面。左の下の「材料だな」のピンクのしましまが、いまコードでぬっている布。色と形のめやす・字はまねない）
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/ui-gingham.png`
ブランチ：`art/okashi-ui-gingham`
点検：3つが横に3つのマスに分かれている／1 正方形のギンガムの布（いちごピンクとクリーム色のチェック・つなげて敷きつめられる・ふちなし・まんなかまで同じ柄）・2 横長の布のふち（やわらかく丸めた布のへりと、内側にクリーム色の点線のステッチ・まんなかは緑のまま空ける・9分割でのばせる）・3 小さな縦長の布のつまみ（ピンクのギンガム・クリーム色の右向きの山の矢印）／参考の絵と同じ画風／人と字が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
3 separate items in a row of three cells with wide even spacing, matching the reference image in soft anime style with smooth painterly shading and warm lighting, like a cozy wooden sweets shop. Left: a perfectly square piece of gingham fabric in strawberry pink and warm cream checks, flat and seen straight from above, the check pattern even and seamless so the square can be tiled edge to edge, no border, no folds, soft fabric texture. Middle: a wide horizontal rectangular fabric frame, a soft rolled cloth hem in strawberry pink gingham with a row of small cream dashed stitches running around the inside, rounded corners, evenly shaped on all sides so it can be sliced into nine parts and stretched, the whole middle area inside the frame left as plain flat solid green (#00FF00). Right: a small tall fabric tab in strawberry pink gingham with rounded ends and a cream chevron arrow pointing right in the middle. Each item centered in its own cell, seen from the front, no people, no text, no letters, no numbers. No shadow on the background, flat solid green background (#00FF00).
```

## Claude のメモ
- 11/19 夕方 しょーくん「ぜんぶ描き下ろし依頼してね」（見た目の総点検で、ギンガムの布 .gingham がコードのしましまのままだった）
- 使い方：1 は布の地（background-repeat で敷きつめる）・2 は上にかさねる ふちとステッチ（border-image・まんなかは抜けて1が見える）・3 は材料だなの右はしの「›」（.mtray::before）
- 取りこみ：`prep_art.py parts … ui-gingham ui-gingham-hem ui-gingham-tab`（1 はふちを切らずに正方形のまま・上限 256／2 は 480／3 は 96）。皮は共通の部品 .gingham（style.css）でリーダーが入れる

## Claude の確認（ここは依頼したチャットが書く）
