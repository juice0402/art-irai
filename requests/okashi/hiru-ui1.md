# UI：レシピ帳の本・まだのふた・売れた！の札・小鳥・ちょうちょ（朝昼）

状態：済
依頼日：2026-11-19
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（画風・塗り・あたたかい光）・`sources/okashi/ui-now.png`（いまのゲームの画面。色と形のめやす。字はまねない）
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/hiru-ui1.png`
ブランチ：`art/okashi-hiru-ui1`
点検：参考の絵と同じ画風／5つがはっきり分かれている／上の段 閉じた革の本・お皿にのった銅のふた（まんなかが無地）・ピンクのリボンの札（まんなかが無地）／下の段 右向きに飛ぶ小鳥・上から見たちょうちょ／字が入っていない／青い色がない／背景は無地の緑

## 画像への指示（このまま使う）

1.
```
A game UI asset sheet on a flat solid green background (#00FF00), five separate items with wide even spacing, three in the top row and two in the bottom row, each centered in its own area, no text, no letters, no numbers, no blue colors. Style: cozy wooden sweets shop, soft anime painterly shading matching the first reference image, warm lighting. Top left: a small closed recipe book seen from the front, square composition, soft warm brown leather cover with rounded corners and thin brass corner caps, a small round cookie emblem in the middle of the cover, a pink ribbon bookmark hanging out of the bottom. Top middle: a round warm copper serving cloche (dome lid) resting on a small cream plate, a tiny pink ribbon bow on the top knob, square composition; the front center of the dome is a plain smooth area with no highlights, no reflections and no pattern so a symbol can be placed on it later. Top right: a horizontal pink ribbon tag, a wide rounded banner about three times wider than tall with small folded notched ribbon tails on both ends and a thin cream stitched border, plain empty center for text later. Bottom left: a small round sparrow-like bird flying to the right, side view, both wings spread wide, dark brown and cream feathers, cute simple shapes. Bottom right: a small butterfly seen from directly above with its wings open, symmetrical, cream and pale yellow wings with soft light brown edges. No shadows on the background.
```

## Claude のメモ
- H-033（昼のお願い・11/19）。入口は昼のコードにある：ui-book（レシピ帳のボタン・30px）・ui-mada（まだひらめいていないお菓子のふた・40px・上にコードの「？」）・ui-sold（棚の「売れた！」の札・約70×24・字はコード）・fx-bird（窓の外の小鳥・24×16・左へは左右反転）・fx-butterfly（ちょうちょ・16×13）
- 取りこむときは `prep_art.py parts <PNG> 240 ui-book ui-mada ui-sold fx-bird fx-butterfly`（上の段から左→右）

## Claude の確認（ここは依頼したチャットが書く）
- 11/19 12時 合格（PR #150）。mazemaze-okashiya に取りこんだ（main d0b052a）
