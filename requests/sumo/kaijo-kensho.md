# 本場所の会場：懸賞旗を持つ呼出し4人（旗は字なし・4色）

状態：済
依頼日：2026-11-28
依頼したチャット：【sumo】
やり方：新しく描く
元の絵：なし
参考の絵：なし
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/sumo/kaijo-kensho.png`
ブランチ：`art/sumo-kaijo-kensho`
点検：4人が横に1列・となりとくっついていない／どの人も正面向きで、頭から足までぜんぶ入っている・同じ大きさ／両手で長い竿をまっすぐ立てて持ち、竿の上の横木から縦長の旗が下がっている／旗は無地（字・印・絵なし）で、色は左から 朱・藍・生成り・紫。まわりに細いふちどりだけ／旗のまん中は平らな色（あとで店の名前をコードで書く）／切り絵ふう（観客 kaijo-kankyaku と同じ和紙の切り絵）・墨の細い線／緑は人にも旗にも使っていない／影なし

## 画像への指示（このまま使う）

1.
```
A game asset sheet on a flat solid pure green background (#00FF00): four separate standing ring attendants for a traditional Japanese sumo tournament, arranged in one horizontal row with wide even spacing, each figure centered in its own quarter of the image and not touching its neighbors, all at the same scale, each shown fully from the top of the banner down to the feet. Every attendant faces the viewer, wearing a simple traditional kimono jacket and wide pleated trousers tied at the shins, holding one tall straight wooden pole upright in front of the body with both hands. At the top of each pole a short horizontal crossbar carries a tall narrow vertical cloth banner hanging straight down, taking up roughly the upper half of the figure's height. Each banner is a plain solid color with only a thin darker border and absolutely nothing written or drawn on it, its center a flat even area. Banner colors from left to right: vermilion red, deep indigo, cream white, plum purple. Style: Japanese paper-cut craft (kirie). Everything is built from layered pieces of washi paper with visible paper fibers and slightly torn edges, flat colors with a thin dark sumi-ink outline, simple round friendly faces with small dot eyes and black hair. Muted traditional colors only. No green anywhere on the figures or banners. No text, no letters, no logos, no symbols, no shadows on the background.
```

## Claude のメモ
- 使い道：sumo の本場所の会場（横綱）。旋回のあいだ、呼出しが懸賞旗を持って土俵のまわりを回る（src/ui/venue.js の懸賞旗・いまはコードの四角）。旗の字（作りものの店の名前）は、旗のまん中にコードで縦に書く
- 取りこむときは、緑を抜いて1人ずつ切り（tools/kaijo_cut.py crowd の形）、旗の四角（字を書く所）を絵から測って src/data/kaijoart.js に書く
- いまのコードの旗の色（data/venue.js の kenshoCol）は7色。絵は4色をくり返す

## Claude の確認（ここは依頼したチャットが書く）
- 合格（11/28）。取りこんだ（sumo-game PR #21・assets/art/kaijo-kensho.webp・旗の四角は src/data/kaijoart.js）
