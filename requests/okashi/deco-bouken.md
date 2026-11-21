# お店のかざり：冒険者の山小屋（5つ）

状態：済
依頼日：2026-11-21
依頼したチャット：【okashi-hiru】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（まんなかのクッキーの画風・塗り）
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/deco-bouken.png`
ブランチ：`art/okashi-deco-bouken`
点検：5つがはっきり分かれている／上の段 窓べ・天井・壁 ／下の段 床のすみ・カウンター／参考の絵と同じ塗り／5つが同じテーマの色でそろっている／人と字と数字が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
5 separate cozy shop decorations in two rows with wide even spacing, three in the top row and two in the bottom row, matching the center cookie in the first reference image in soft anime style with smooth painterly shading and warm lighting, all in one matching '冒険者の山小屋' theme. Top row from left: a small brass telescope on a little wooden tripod, sitting on a flat surface; a hanging iron lantern with a warm candle glow, hanging from a short chain at the top; an old parchment treasure map pinned to a wall with drawn mountains, a river and an X mark, no letters, seen straight from the front. Bottom row from left: a wooden barrel with a coiled rope on top, standing on the floor; an open brass pocket compass beside a small rolled scroll. Each item centered in its own cell with plenty of margin, front view or seen slightly from above, no people, no text, no letters, no numbers, no labels. Any green parts are a warm yellowish green or pale minty aqua, clearly different from the background. No shadow on the background, flat solid green background (#00FF00).
```

## Claude のメモ
- 11/21 しょーくん「お店の飾りはたくさん作っちゃって」「家具も組み合わせやセット効果で効く傾向が変わるビルドが組めるように」・「今日はぽぽちが直接出す」。昼のお店の5か所（窓べ／天井／壁／床のすみ／カウンター）に1つずつかざる。テーマ8つ×5か所＝40こ
- 取りこむときは `prep_art.py parts <PNG> 384 deco-bouken-mado deco-bouken-tenjo deco-bouken-kabe deco-bouken-yuka deco-bouken-counter --strict`（上の段から左→右）
- 「待ち」は、前の4つが描けたら「依頼中」にする（okashi は同時に4つまで）

## Claude の確認（ここは依頼したチャットが書く）
- 11/21 合格。mazemaze-okashiya の枝 hiru/deco に取りこんだ（prep_art.py parts 384 --strict・slim_art）
