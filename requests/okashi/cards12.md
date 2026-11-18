# ふしぎな素材：しずく寒天・ほしくずシュガー・ほのおカラメル

状態：済
依頼日：2026-11-18
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（まんなかのクッキーの画風・塗り・大きさにそろえる）
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/cards12.png`
ブランチ：`art/okashi-cards12`
点検：素材が3つ、左から 小さな丸いガラスのお皿にのった、大きな水のしずくの形の すきとおった寒天（まわりに小さなしずく形の寒天・中に小さな泡・ひんやりした水色の光）・こい青の小さな布の袋からこぼれる、夜空のようにきらきら光る細かい砂糖（小さな金の星のかけらまじり）・小さな銅の片手なべの、つやつやのこはく色のカラメル（さじからたれるカラメルのリボンが小さな炎の形）／参考の絵と同じ塗り／それぞれが横に3等分した場所のまんなかにあり、重なっていない／人は入っていない／文字が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
Three separate fantasy baking ingredients side by side with wide even spacing, matching the center cookie in the reference image in soft anime style, smooth painterly shading, warm lighting and size. Left: a crystal-clear agar jelly shaped like a big water droplet on a small round glass plate, with a few tiny droplet-shaped agar pieces around it, tiny bubbles inside and cool pale blue glints. Center: a small deep navy cloth pouch spilling fine glittering sugar that sparkles like a starry night sky, mixed with tiny golden star flakes. Right: a small copper saucepan of glossy bubbling amber caramel, with a spoon above it drizzling a ribbon of caramel that curls into the shape of a little flame, soft warm glow. Each item is centered in its own third of the image, seen slightly from above, no people, no shadow on the background, flat solid green background (#00FF00), no text.
```

## Claude のメモ
- 夜のお客さん（H-016）がくれる ふしぎな素材。左＝しずくクラゲの寒天（card-kanten）・まんなか＝こんぺいトカゲのほしくずシュガー（card-hoshi）・右＝ひよこのほのおカラメル（card-karamel）
- 夜のデッキの「こんぺいトカゲの砂糖」（星の金平糖のびん）・「しずくクラゲの水」（ガラスのびん）・スライムゼリー（水色のゼリーのかたまり）・ほのお鳥のたまご（炎もようのたまご）と見分けがつくように、形と入れ物を変えた
- 取りこむときは3等分に切って緑を抜く：`prep_art.py three … card-kanten card-hoshi card-karamel <上限>`（カードの絵は MATS の alt より card-<id> が先）

## Claude の確認（ここは依頼したチャットが書く）
- 合格（11/18・PR #62）。card-kanten・card-hoshi・card-karamel として取りこんだ
