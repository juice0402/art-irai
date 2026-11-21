# お店のかざり：妖精のお花畑（5つ）

状態：済
依頼日：2026-11-21
依頼したチャット：【okashi-hiru】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（まんなかのクッキーの画風・塗り）
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/deco-fairy.png`
ブランチ：`art/okashi-deco-fairy`
点検：5つがはっきり分かれている／上の段 窓べ・天井・壁 ／下の段 床のすみ・カウンター／参考の絵と同じ塗り／5つが同じテーマの色でそろっている／人と字と数字が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
5 separate cozy shop decorations in two rows with wide even spacing, three in the top row and two in the bottom row, matching the center cookie in the first reference image in soft anime style with smooth painterly shading and warm lighting, all in one matching '妖精のお花畑' theme. Top row from left: a tiny potted flower bush with pastel pink and lilac blossoms and one sparkling dewdrop, sitting on a flat surface; a hanging wreath of flowering vines with small pastel flowers and ribbons, hanging from a short string at the top; a pressed-flower picture of small pastel flowers in a round wooden frame, seen straight from the front, flat on a wall. Bottom row from left: a big toadstool mushroom stool with a soft pink cap and cream dots, standing on the floor; a small glass jar filled with candy-like flower petals, tied with a pink ribbon. Each item centered in its own cell with plenty of margin, front view or seen slightly from above, no people, no text, no letters, no numbers, no labels. Any green parts are a warm yellowish green or pale minty aqua, clearly different from the background. No shadow on the background, flat solid green background (#00FF00).
```

## Claude のメモ
- 11/21 しょーくん「お店の飾りはたくさん作っちゃって」「家具も組み合わせやセット効果で効く傾向が変わるビルドが組めるように」・「今日はぽぽちが直接出す」。昼のお店の5か所（窓べ／天井／壁／床のすみ／カウンター）に1つずつかざる。テーマ8つ×5か所＝40こ
- 取りこむときは `prep_art.py parts <PNG> 384 deco-fairy-mado deco-fairy-tenjo deco-fairy-kabe deco-fairy-yuka deco-fairy-counter --strict`（上の段から左→右）
- 「待ち」は、前の4つが描けたら「依頼中」にする（okashi は同時に4つまで）

## Claude の確認（ここは依頼したチャットが書く）
- 11/21 合格。mazemaze-okashiya の枝 hiru/deco に取りこんだ（prep_art.py parts 384 --strict・slim_art）
