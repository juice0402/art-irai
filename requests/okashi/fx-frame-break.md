# エフェクト：オーバーランで額縁がこわれる（木のふちのひび・割れ・穴と、とびちる木のかけら）

状態：済
依頼日：2026-11-22
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/ui-stage-frame-ref.png`（夜の舞台の額縁。赤茶色の彫りの木・内がわの細い金のふち。木の色・彫り・塗りをこれにそろえる）
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/fx-frame-break.png`
ブランチ：`art/okashi-fx-frame-break`
点検：8つがはっきり分かれている（横4×たて2・重ならない）／参考の絵と同じ木（赤茶色の彫りの木と金のふち）・同じ塗り／上の段：1〜3 は 参考の絵の右の辺と同じ たて長の木のふち（左がわに金のふち）が こわれた所：1 ぎざぎざのひびと すき間・ささくれ、2 左がわ（内がわ）が欠けて 金のふちが折れて曲がっている、3 まんなかに穴があいて まわりにひびが広がる・木のささくれ。4 は木のふちなしで ひびの線だけ（こい茶色のぎざぎざの線と、光が当たったささくれのふち）／下の段：5 長くとがった木の破片・6 彫りのある赤茶色の木のかたまり・7 曲がった金のふちが ついた小さな木のかたまり・8 小さな木くずと破片のかたまり／字が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
A game effect asset sheet on a flat solid green background (#00FF00), eight separate items in a grid of four columns and two rows with wide even spacing, each centered in its own cell and not touching its neighbors, no text, no letters, no numbers. Everything is made of the same carved reddish-brown wood with a thin gold inner trim as the ornate frame in the reference image, with the same soft anime painterly shading and warm lighting. Top row, items 1 to 3: each is a short vertical segment of the right side of that frame (the carved wood strip standing upright, with the thin gold trim running along its left edge), shown damaged by a powerful impact. Item 1 (top left): the strip split by a jagged crack with a dark gap and splintered, torn wood fibers sticking out. Item 2: a chunk broken out of the left (inner) edge, with splintered edges and the gold trim snapped and bent outward. Item 3: a smashed hole through the middle of the strip with cracks radiating outward and splinters around the hole. Item 4 (top right): crack lines only with no wood strip behind them, dark brown jagged branching cracks with thin light-catching splintered edges, so they can be laid over the frame. Bottom row, flying debris pieces: item 5 (bottom left): one long sharp wooden splinter. Item 6: one broken chunk of the carved reddish-brown wood showing a bit of the vine relief. Item 7: one small broken wood chunk with a piece of bent gold trim still attached. Item 8 (bottom right): a small cluster of wood chips and tiny splinters. No shadows on the background.
```

## Claude のメモ
- 11/22 しょーくん「おなかゲージの限界突破演出、枠に入る亀裂がダサい・描き下ろしじゃないから しょぼく見える。本当の亀裂に加えて、破壊された木材も」。いまはコードのひび（battle-fx.js の CRACK_SVG・style-battle.css の .dc-crack）と、茶色の四角の木くず（.qsplint）
- 使い道：fx-fbreak-crack・fx-fbreak-chip・fx-fbreak-hole（額縁の右の木のふちに当たった所に残す・その夜のあいだ・3つまで）・fx-fbreak-lines（ひびだけ・重ねる用）・fx-wood-splinter・fx-wood-chunk・fx-wood-trim・fx-wood-chips（当たった瞬間に とびちる）
- 取りこむときは `prep_art.py parts <PNG> 300 fx-fbreak-crack fx-fbreak-chip fx-fbreak-hole fx-fbreak-lines fx-wood-splinter fx-wood-chunk fx-wood-trim fx-wood-chips`（上の段から左→右）

## Claude の確認（ここは依頼したチャットが書く）
- 合格（11/22）。8つとも parts で切って取りこんだ（fx-fbreak-*・fx-wood-*）。ひび→欠け→穴の順に同じ所がこわれる
