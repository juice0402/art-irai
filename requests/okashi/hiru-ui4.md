# UI：昼のパズルの小物（となりの相性の結び目・たての列のリボン・相性帳・あしたの予報の札・呼びこみのベル）

状態：済
依頼日：2026-11-21
依頼したチャット：【okashi-hiru】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（画風・塗り・あたたかい光）・`sources/okashi/ui-now3.png`（いまの画面。右の陳列棚のかごのならび。色と大きさのめやす・字はまねない）
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/hiru-ui4.png`
ブランチ：`art/okashi-hiru-ui4`
点検：5つが上3つ・下2つのマスにはっきり分かれている／上の段 1 小さな金のハートを2本のピンクのリボンで結んだ横長の結び目・2 小さな木のくぎからたてにさがる、はちみつ色のたて長のリボン（下は燕尾・まんなかは無地）・3 ばら色の布の表紙の小さな本（金の角・表紙にクッキーといちごが重なったマーク・字なし）／下の段 4 赤い画びょうでとめた、ふちが波形のクリーム色の小さな紙の札（すみに雲から顔を出すお日さまの落書き・まんなかは無地）・5 木の持ち手と赤いリボンの小さな真ちゅうのハンドベル（少しかたむけて鳴っている・小さなキラキラ2つ）／緑や青の物がない／字が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
5 separate items with wide even spacing, three in the top row and two in the bottom row, matching the reference image in soft anime style with smooth painterly shading and warm lighting, like a cozy wooden sweets shop. Top row from left: a small horizontal charm of two short pink satin ribbons tied into a neat bow around a tiny glossy golden heart, made to sit between two shelf baskets; a tall narrow vertical honey-gold satin ribbon banner hanging from a small round wooden peg, with a swallowtail bottom end and a plain flat center, evenly shaped so it can be sliced into nine parts and stretched vertically; a small closed storybook with a rose pink cloth cover, gold corner guards and a small emblem of a round cookie overlapping a strawberry on the cover. Bottom row: a small cream parchment card with a softly scalloped edge, held by a red push pin at the top, with a faint little doodle of a sun peeking from a cloud in one corner and a plain empty center; a small brass hand bell with a wooden handle and a red ribbon, tilted as if ringing, with two tiny sparkles beside it. No green or blue items, no text, no letters, no numbers, no shadows on the background. Flat solid green background (#00FF00).
```

## Claude のメモ
- 11/21 しょーくん「お昼を夜レベルに面白くしなきゃ」「陳列を楽しむパズルビルド」→ えらぶ質問で「となりの相性」「たての列のシリーズ」「あしたの予報」「営業中も少しさわれる」。しょーくん「追加する絵があったら、先に依頼しておいてね」
- 使い道（どれも昼のチャットの画面）：1 となりどうしの相性がいいマスのあいだ（ui-aisho）／2 たての列が同じ形でそろったときに列の上からさがるリボン（ui-series・字はコード）／3 相性帳の本（ui-aisho-book・レシピ帳 ui-book のとなり）／4 1日のまとめの「あしたの予報」の札（ui-forecast・字と顔はコード）／5 営業中の「呼びこみ」のボタン（ui-bell）
- 取りこみ：`prep_art.py parts … ui-aisho ui-series ui-aisho-book ui-forecast ui-bell`（上限 160・320・240・480・160）

## Claude の確認（ここは依頼したチャットが書く）
- 11/21 合格（PR #211）。まぜまぜおかし屋の枝 hiru/puzzle に ui-aisho・ui-series・ui-aisho-book・ui-forecast・ui-bell（prep_art parts 320） として取りこんだ
