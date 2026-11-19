# ★3の大作の飴細工6つ（みなもの飴細工のカードを編集）

状態：済
依頼日：2026-11-19
依頼したチャット：【okashi】
やり方：編集
元の絵：`sources/okashi/cards-minamo1.png`（みなもの飴細工のカード6つ）
参考の絵：なし
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/special-taisaku.png`
ブランチ：`art/okashi-special-taisaku`
点検：元の絵と同じ位置に6つ（3×2）／どれも元の飴細工が大きく豪華に完成した形（金のふち・にじの光・きらきら）／上の段 台の上の飴の花の大作・羽を広げた白鳥・塔がいくつもあるお城 ／下の段 飴の花があふれるかご・らせんのつやのリボン・大きな飴のリボン結び／元の絵と同じ塗り／人と字が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
Edit this image. Keep the six items in exactly the same grid positions, the same soft anime painterly style and the same flat solid green background (#00FF00). Turn each one into a grand completed candy-glass masterpiece, larger and more intricate, glossy and translucent with gold accents, soft rainbow light glints and small gold sparkles. Top row from left: the lump of amber candy on the wooden stand becomes a large glossy amber candy sculpture of a blooming flower on the same stand; the candy swan becomes a large elegant swan with spread wings of fine spun sugar feathers; the candy castle becomes a grand tall candy castle with several towers and little pennants. Bottom row from left: the spun sugar basket becomes a basket overflowing with candy flowers and a small sugar-glass butterfly; the glaze pot becomes the pot with a shining stream of glaze curling into a spiral ribbon above it; the pulled sugar ribbon becomes a big shining bow of pulled sugar. Each item stays centered in its own cell, no people, no text, no letters. No shadow on the background.
```

## Claude のメモ
- みなも①の★3（art.js の special-<飴細工>）。いまは主役の飴細工のカードの絵
- 取りこむときは `prep_art.py parts … special-amedai special-hakucho special-oshiro special-hanakago special-tsuya special-nobashi --strict --despill`（上限300・ガラスで緑がすける）

## Claude の確認（ここは依頼したチャットが書く）
- 11/19 9時50分 合格（PR #120）。mazemaze-okashiya に取りこむ
