# わかばの作ったジャム（★3）：くだもの5つとミックス

状態：済
依頼日：2026-11-19
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（まんなかのクッキーの画風・塗り・大きさにそろえる）
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/jams.png`
ブランチ：`art/okashi-jams`
点検：ギンガムの布のふたとリボンのジャムのびんが6つ、3×2のマスにはっきり分かれている／上の段 りんご（赤みの金色）・きいちご（濃いピンク）・もも（うすいピンク） ／下の段 みかん（オレンジ）・ぶどう（むらさき）・ミックス（赤・オレンジ・むらさきのしま）／それぞれのそばに、その実／ラベルと字が入っていない／参考の絵と同じ塗り／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
6 separate fantasy sweets-shop items in a three-by-two grid with wide even spacing, matching the center cookie in the reference image in soft anime style with smooth painterly shading and warm lighting and size. Each item is a special finished jar of homemade jam with a gingham cloth lid tied with a ribbon, the jam glossy and glowing softly, with small gold sparkles around the jar. Top row from left: golden red apple jam with a fresh apple slice leaning on the jar; deep pink raspberry jam with a few raspberries beside it; soft peach-pink peach jam with a peach slice beside it. Bottom row from left: bright orange mandarin marmalade with mandarin segments beside it; rich purple grape jam with a small bunch of grapes beside it; a jar with layered stripes of red, orange and purple jam with mixed fruits beside it. Each item centered in its own cell, seen slightly from above, no people, no text, no letters, no labels. Any green parts are a warm yellowish green or pale minty aqua, clearly different from the background. No shadow on the background, flat solid green background (#00FF00).
```

## Claude のメモ
- 飴ジャムで生まれる★3のジャム（art.js の jam-<実>）。いまは card-torojam・card-shimejam を仮に使っている
- 取りこむときは `prep_art.py parts … jam-apple jam-berry jam-peach jam-mikan jam-grape jam-mix`（上の段から左→右・上限300）

## Claude の確認（ここは依頼したチャットが書く）
- 11/19 9時50分 合格（PR #119）。mazemaze-okashiya に取りこむ
