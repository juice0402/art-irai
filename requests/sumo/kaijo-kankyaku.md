# 本場所の会場：観客（前から）12人

状態：済
依頼日：2026-11-27
依頼したチャット：【sumo】
やり方：新しく描く
元の絵：なし
参考の絵：なし
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/sumo/kaijo-kankyaku.png`
ブランチ：`art/sumo-kaijo-kankyaku`
点検：横4×たて3の12人が、はっきり分かれている（となりと重ならない）／みんな前を向いて座布団にあぐら・頭から座布団まで全身が入っている・同じ大きさ／和紙を重ねた切り絵ふう（紙のすじ・墨の細いふち）／人に緑の色がない／字・印が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
A game asset sheet on a flat solid pure green background (#00FF00): twelve separate seated spectators for a traditional Japanese sumo tournament hall, arranged in a grid of four columns and three rows with wide even spacing, each figure centered in its own cell and not touching its neighbors. Every figure faces the viewer, sitting cross-legged on a flat floor cushion, shown fully from the top of the head down to the cushion, all at the same scale. A mix of men and women of different ages in kimono: cheering with raised arms, clapping, waving a folding fan, hands pressed together, or watching excitedly. Style: Japanese paper-cut craft (kirie). Each figure is built from layered pieces of washi paper with visible paper fibers and slightly torn edges, flat colors with a thin dark sumi-ink outline, simple round friendly faces with small dot eyes and black hair. Muted traditional colors only: indigo, vermilion red, ochre, plum, beige, slate grey. No green anywhere on the figures. No text, no letters, no logos, no shadows on the background.
```

## Claude のメモ
- 11/27 しょーくん「回転が終わりかけと同時に、下からもりもりっと観客が湧いてきて」「手前と奥で並べて」「紙の切り絵ふう」「GPTでお願い」。本場所の取組で、土俵の奥の段に並べる観客（番付が上がるほど人数が増える）
- 取りこむときは 4×3 に切って緑を抜く（kaijo-kk1〜12）。sumo の ui/venue.js が1人ずつ並べて、下から湧かせる

## Claude の確認（ここは依頼したチャットが書く）
- 合格（11/27）。12人とも取りこんだ（シートのまま kaijo-kankyaku・1人ずつの四角は sumo の src/data/kaijoart.js）
