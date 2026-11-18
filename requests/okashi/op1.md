# オープニングの絵（3まい）：朝の厨房でまぜるほのか・窓から森へ流れる横長の背景・夜のお店の外観

状態：済
依頼日：2026-11-18
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（画風・塗り・あたたかい光）・`sources/okashi/honoka.png`（1 のほのかの見た目）・`sources/okashi/bg-morning.png`（1 と 2 の朝の厨房）・`sources/okashi/bg-shop-out.png`（3 のお店の外観。同じ建物を夜に）
大きさ：1536×1024
背景：絵ぜんぶ（背景の絵なので緑にしない）
年齢区分：全年齢
保存先：`out/okashi/op1.png`（各段は `out/okashi/op1_step1.png` 〜 `_step3.png`）
ブランチ：`art/okashi-op1`
点検：3まいとも参考の絵 cards1.png と同じ画風（やわらかいアニメ調・なめらかな厚塗り・あたたかい光）／字・看板の文字・サインなし／1 朝の厨房で、ほのか（赤いポニーテールで毛先がオレンジ・白いコック帽とコート・赤いエプロンに炎のマーク・ほっぺにすす）がボウルの生地（クリーム色と野いちごのピンクのうずまき）を木べらでまぜている・わくわく顔・湯気と甘い匂いの線・ほのかとボウルは絵のまんなか（上下を切って16:9にしても切れない）・指の数と形がくずれていない／2 横長の1つの景色：左はしが朝の厨房の開いた窓 → 右へ行くほど森と夕方の光・右半分に茂みや木の根もとのかげ（モンスターが顔を出す空きの所。モンスターは描かない）・大事な物は上下のまんなかの帯に（上は空・下は地面で、切っても困らない）／3 bg-shop-out.png と同じお店（いちごとクリームのしましまの日よけ・入口の上の丸い看板は字のない無地・ショーウィンドウ・石の小道）を夜に：窓と入口のランプのあたたかい灯り・星と月・お店の前に、あいている地面（モンスターが集まる所。モンスターは描かない）／人は 1 のほのかだけ・モンスターは描かない

## 画像への指示（このまま使う）

1.
```
A warm early-morning scene in a small cozy wooden bakery kitchen, wide horizontal view. The young chef girl from the reference image honoka.png (red ponytail with orange tips, white chef hat, white chef coat, red apron with a small flame mark, a little smudge of soot on one cheek) stands behind a wooden worktable and happily stirs a big mixing bowl with a wooden spatula. The batter in the bowl swirls in cream color and wild-strawberry pink. She looks excited and full of energy. Soft steam and gentle wavy lines of sweet smell rise from the bowl. The kitchen looks like the reference image bg-morning.png: a rounded brick oven with a warm glow, soft morning sunlight through a window, shelves with glass jars. Keep her upper body and the bowl in the center of the frame, with plain space above and below so the image can be cropped to 16:9. Soft anime art with smooth painterly shading matching the reference image cards1.png, warm light. Natural hands with five fingers. No text, no letters, no signs.
```

2.
```
A very wide panoramic background painting, one continuous scene read from left to right. On the far left, the open wooden window of a cozy bakery kitchen in the morning, like the reference image bg-morning.png. Moving to the right, the view flows out of the window across a gentle leafy forest at the edge of a small village, and the light changes gradually from fresh morning light on the left to warm golden sunset light on the right. On the right half, leafy bushes, ferns and thick tree trunks leave shadowy open spots where small creatures could peek out; leave those spots empty. Keep every important element inside the middle horizontal band of the image, with simple sky at the top and simple grass and ground at the bottom, because the top and bottom will be cropped into a very wide strip. Soft anime background art with smooth painterly shading matching the reference image cards1.png. No people, no creatures, no text, no letters.
```

3.
```
The same small wooden sweets shop as in the reference image bg-shop-out.png, now at night. Keep the same building and shape, the striped strawberry-red and cream awning, the round signboard above the door left completely blank, the glass display window and the small stone path. A calm night at the edge of the forest with a deep indigo-violet starry sky and a soft moon. Warm golden light glows from the windows and from a small lantern beside the door, and soft light spills onto an open, empty patch of ground in front of the shop where small creatures could gather; leave that ground empty. Soft anime background art with smooth painterly shading matching the reference image cards1.png. No people, no creatures, no text, no letters on the sign.
```

## Claude のメモ
- オープニング（毎回タイトルの前・約10秒・字なし）の絵。昼のチャットのお願い H-015
- 1 → op-mix（16:9 に切って横960）。2 → op-forest（上下を切って 32:9 の帯 → 横1920×540。横に流す）。3 → op-shop-night（16:9 に切って横960。看板の「まぜまぜおかし屋」の字はコードで重ねる）
- モンスターは夜の絵（mon-*・モブ）を重ねる。⑤のボウルの真上は bg-night とコードのうずまき
- 仲間（みなも・わかば）は出さない

## Claude の確認（ここは依頼したチャットが書く）
- 1・3 は合格（11/18）。op-mix・op-shop-night（16:9 の横960 webp）として取りこんだ
- 2 は不合格（11/18）：景色のまんなかにお店が描かれた（森の景色だけがほしい）・下の3分の1がのっぺりした平らな緑。op2.md で出しなおす
