# お店のかざり：ふわもこ（5つ）

状態：済
依頼日：2026-11-21
依頼したチャット：【okashi-hiru】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（まんなかのクッキーの画風・塗り）
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/deco-fuwa.png`
ブランチ：`art/okashi-deco-fuwa`
点検：5つがはっきり分かれている／上の段 窓べ・天井・壁 ／下の段 床のすみ・カウンター／参考の絵と同じ塗り／5つが同じテーマの色でそろっている／人と字と数字が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
5 separate cozy shop decorations in two rows with wide even spacing, three in the top row and two in the bottom row, matching the center cookie in the first reference image in soft anime style with smooth painterly shading and warm lighting, all in one matching 'ふわもこ' theme. Top row from left: a soft plush toy of a sitting cream-colored cat with a red ribbon, sitting on a flat surface; a string of fluffy pastel yarn pompoms hanging in a gentle curve, hanging from a short string at the top; a small knitted wall tapestry with a simple heart pattern in pastel yarn, hanging on a wooden rod, seen straight from the front. Bottom row from left: a big round fluffy beanbag cushion in pale peach, sitting on the floor; a wicker basket full of colorful yarn balls with two knitting needles. Each item centered in its own cell with plenty of margin, front view or seen slightly from above, no people, no text, no letters, no numbers, no labels. Any green parts are a warm yellowish green or pale minty aqua, clearly different from the background. No shadow on the background, flat solid green background (#00FF00).
```

## Claude のメモ
- 11/21 しょーくん「お店の飾りはたくさん作っちゃって」「家具も組み合わせやセット効果で効く傾向が変わるビルドが組めるように」・「今日はぽぽちが直接出す」。昼のお店の5か所（窓べ／天井／壁／床のすみ／カウンター）に1つずつかざる。テーマ8つ×5か所＝40こ
- 取りこむときは `prep_art.py parts <PNG> 384 deco-fuwa-mado deco-fuwa-tenjo deco-fuwa-kabe deco-fuwa-yuka deco-fuwa-counter --strict`（上の段から左→右）
- 「待ち」は、前の4つが描けたら「依頼中」にする（okashi は同時に4つまで）

## Claude の確認（ここは依頼したチャットが書く）
- 11/21 合格。mazemaze-okashiya の枝 hiru/deco に取りこんだ（prep_art.py parts 384 --strict・slim_art）
