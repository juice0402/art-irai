# UI：カードのふち（★1銅・★2銀・★3金・フィールド）

状態：待ち（前の依頼が済んだら、【okashi】が依頼中にする）
依頼日：2026-11-18
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（画風・塗り・あたたかい光）・`sources/okashi/ui-now.png`（いまのゲームの画面。色と形のめやす。字はまねない）
大きさ：1536×1024
背景：無地の緑 #00FF00（カードの絵の窓も緑）
年齢区分：全年齢
保存先：`out/okashi/ui-cards.png`
ブランチ：`art/okashi-ui-cards`
点検：参考の絵と同じ画風／横5:たて7のカードのふちが4つ横に並ぶ／どれも同じ形：太い金属のふち・上に大きな丸い窓（中は何もない緑）・窓のすぐ下に無地の細いリボンの帯・下に無地のクリーム色の紙／左から銅・銀・金（うすい虹の箔ときらめき）・鉄に真ちゅうのびょう／上の2すみに小さないちごとクッキー／字・数字・絵が入っていない

## 画像への指示（このまま使う）

1.
```
Four empty trading card frames side by side with even spacing on a flat solid green background (#00FF00), each a rounded rectangle about five wide by seven tall, front view, no text, no letters, no numbers, no pictures inside. Each frame has the same layout: a thick decorated metal border, a large rounded window in the upper part that is completely empty flat green, a thin blank ribbon band across the middle just below the window, and a plain cream paper panel in the lower part. From left to right: the first frame has a warm copper border, the second a polished silver border, the third a shining gold border with a faint rainbow foil sheen and tiny sparkles, and the fourth a dark iron border with brass rivets. Small sweets ornaments at the top corners of each frame (a tiny strawberry and a tiny cookie). Soft anime painterly shading matching the first reference image, warm lighting. No shadows on the background.
```

## Claude のメモ
- カード（cards-ui.js の cardFace）のふち。窓に絵・リボンに名前・紙に効果・属性の帯と紋章はコードで重ねる
- いまのふちの決まり（★1 銅・★2 銀・★3 金と虹の箔）はそのまま。4つめはフィールド

## Claude の確認（ここは依頼したチャットが書く）
- まだ
