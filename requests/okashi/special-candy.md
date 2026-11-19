# ★3のちいさなキャンディ6つ（みなものキャンディのカードを編集）

状態：済
依頼日：2026-11-19
依頼したチャット：【okashi】
やり方：編集
元の絵：`sources/okashi/cards-minamo2.png`（みなものキャンディのカード6つ）
参考の絵：なし
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/special-candy.png`
ブランチ：`art/okashi-special-candy`
点検：元の絵と同じ位置に6つ（3×2）／どれも元のキャンディが豪華になった形（宝石のつや・きらきら）／上の段 ガラスの皿に山もりのドロップ・花火のようにはじけるキャンディ・リボンで束ねたペロキャン5本 ／下の段 クッションの上の王冠のドロップ・あふれるキャンディのびん・氷の上のミント飴／元の絵と同じ塗り／人と字が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
Edit this image. Keep the six items in exactly the same grid positions, the same soft anime painterly style and the same flat solid green background (#00FF00). Turn each one into a deluxe finished candy treat, richer and more sparkling, shining like jewels with small gold sparkles. Top row from left: the three rolling drops become a little glass dish heaped with many glossy round candy drops; the popping candies become a big burst of sparkling popping candies like a tiny firework; the two crossed lollipops become a bouquet of five big swirly lollipops tied with a ribbon. Bottom row from left: the crowned candy drop becomes a large jewel candy drop on a small velvet cushion wearing a bigger gold crown; the candy jar becomes a big glass jar overflowing with colorful candies spilling out; the mint candy becomes a cluster of frosty pale aqua mint candies on sparkling ice crystals. Each item stays centered in its own cell, no people, no text, no letters. No shadow on the background.
```

## Claude のメモ
- みなも②の★3（art.js の special-<キャンディ>）。いまは主役のキャンディのカードの絵
- 取りこむときは `prep_art.py parts … special-korodrop special-hajike special-peroc special-ichidrop special-candybin special-mintame --strict --despill`（上限300）

## Claude の確認（ここは依頼したチャットが書く）
- 11/19 朝 合格（PR #124）。mazemaze-okashiya に取りこんだ
