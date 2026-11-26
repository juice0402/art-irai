# 福箱を開ける演出の部品：白い煙2つ・金箔のかけら2つ・金のきらめき・光の筋

状態：済
依頼日：2026-11-26
依頼したチャット：【sumo】
やり方：新しく描く
元の絵：なし
参考の絵：なし
大きさ：1536×1024
背景：真っ黒 #000000（光る物と煙なので）
年齢区分：全年齢
保存先：`out/sumo/fukubako-fx.png`
ブランチ：`art/sumo-fukubako-fx`
点検：横3×たて2の6つが、はっきり分かれている（となりと重ならない）／上の段：左＝ふんわり丸くもりあがった白い煙のかたまり・まんなか＝細くうずを巻いて立ちのぼる白い煙の筋・右＝たてにのびるやわらかい光の筋（下が明るく上で消える・輪や丸ではない）／下の段：左＝平らな金箔のかけら（ふちがぎざぎざ）・まんなか＝くるっとまるまった金箔のかけら・右＝小さな金のきらめき（4つの先）／人・顔・字が入っていない／背景は真っ黒だけ

## 画像への指示（このまま使う）

1.
```
A game effect asset sheet on a flat solid pure black background (#000000), six separate items in a grid of three columns and two rows with wide even spacing, each centered in its own cell and not touching its neighbors, no text, no letters, no numbers, no people, no faces. Top row: left, one soft billowing puff of pure white smoke, rounded and fluffy, denser in the middle and fading to transparent wisps at the edges; center, one thin curling wisp of white smoke rising upward in a gentle spiral and fading out at the top; right, one soft vertical shaft of warm golden light, brightest at the bottom and fading out toward the top, slightly wider at the bottom, gentle and airy, not a ring and not a circle. Bottom row: left, one flat irregular flake of real gold leaf with torn jagged edges and fine crinkles catching the light; center, one small curled flake of gold leaf twisting in the air; right, one small four-pointed twinkle of warm golden light with a tiny bright center. Rich, highly detailed realistic rendering, elegant and premium. No shadows.
```

## Claude のメモ
- 11/26 しょーくん「エフェクトも動かす前提でパーツづくりを依頼」。福箱（金の漆の箱・紫の組紐）を開けたとき：ふたが浮く → 中から光の筋が立ちのぼる → 白い煙がふわっと広がる → 金箔がひらひら舞う・きらめき。煙・金箔・きらめきはコードで数を出して動かす（大きさ・回転・すける）
- 取りこむときは 3×2 に切って、黒をすける形にする（明るさ → すけ具合・または重ねるとき明るくする）

## Claude の確認（ここは依頼したチャットが書く）
- 合格（11/26）。sumo-game の assets/art/ に取りこんだ（fx-smoke・fx-wisp・fx-ray・fx-leaf1・fx-leaf2・fx-glint）
