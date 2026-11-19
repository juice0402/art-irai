# 演出：スペシャル発動の帯（カットイン・シェフごとに3本）

状態：済
依頼日：2026-11-19
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（画風・塗り・あたたかい光）・`sources/okashi/ui-now3.png`（いまの画面。まんなかの絵の、ななめの帯がいまコードでぬっている帯。色と形のめやす・字はまねない）
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/fx-cutin.png`
ブランチ：`art/okashi-fx-cutin`
点検：横長の帯が3本、上から下へ間をあけて並んでいる／どの帯も画像の左はしから右はしまで同じ太さ・上と下のふちはまっすぐで細い金のライン／1 赤とオレンジの帯（横に流れる炎のすじと火の粉）・2 水色とうすい氷色の帯（横に流れる水しぶきと氷のきらめき）・3 はちみつ色とクリーム色の帯（横に流れる若葉と小さなピンクの花びら）／帯のまんなかの高さは明るく、人や物を重ねても見やすい／人・字が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
3 separate long horizontal banners stacked from top to bottom with wide even gaps of plain background between them, matching the reference image in soft anime style with smooth painterly shading and warm lighting. Each banner runs the full width of the image from the left edge to the right edge with the same height, perfectly straight top and bottom edges, each edge trimmed with a thin polished gold line. Top banner: rich red and orange with dynamic horizontal flame streaks, speed lines and tiny glowing embers flowing from right to left. Middle banner: light aqua and pale ice tones with horizontal water splash streaks, speed lines and small sparkling ice glints flowing from right to left. Bottom banner: warm honey and cream tones with fresh light green leaves, small pink petals and soft speed lines flowing from right to left. The middle height of each banner is brighter and calmer so a character and a title can be placed on top and stay easy to see. Dramatic special move cut-in style for a cozy sweets shop game. No people, no text, no letters, no numbers. No shadow on the background, flat solid green background (#00FF00).
```

## Claude のメモ
- 11/19 夕方 しょーくん「ぜんぶ描き下ろし依頼してね」（スペシャル発動・スペシャルができた！のカットインの帯 .ci-band がコードのグラデとすじのままだった）
- 使い方：battle-fx.js の cutIn の帯 .ci-band の地（シェフごと：ほのか＝1・みなも＝2・わかば＝3）。帯はななめに置いて、左右へ流す（transform だけ）。シェフの戦闘ポーズとカードの絵・字はコードで上に重ねる
- 取りこみ：`prep_art.py parts … fx-cutin-honoka fx-cutin-minamo fx-cutin-wakaba`（たてに3つに切る・横960）。3 の若葉が緑に近いので `--strict`

## Claude の確認（ここは依頼したチャットが書く）
- 11/19 夕方 合格（PR #160）。mazemaze-okashiya main fceb833 に取りこんだ（fx-cutin-honoka・minamo・wakaba 横960・--strict）。cutIn の帯 .ci-band.art（cover・右よりを見せる）
