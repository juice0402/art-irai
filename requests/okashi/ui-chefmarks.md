# UI：みなも・わかばの味パワーの紋章と舞台のメダル（炎はほのかだけ）

状態：依頼中
依頼日：2026-11-19
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/ui-chefmark-ref.png`（いまの ほのかの紋章〔左・炎の形・まんなかにクリーム色の丸〕と舞台のメダル〔右・真ちゅうの丸〕。大きさ・ふちの太さ・塗りをこれにそろえ、炎はつかわない）・`sources/okashi/cards1.png`（画風と塗り）
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/ui-chefmarks.png`
ブランチ：`art/okashi-ui-chefmarks`
点検：4つが2×2に分かれている／左上＝水色の飴の紋章（つやつやの包み飴の形・まんなかに無地のクリーム色の丸）／右上＝若葉の紋章（葉っぱの冠の形・小さな赤い実・まんなかに無地のクリーム色の丸）／左下＝真ちゅうの丸いメダルにガラスの飴ばさみと飴のしずく／右下＝真ちゅうの丸いメダルに若葉の小枝と小さなくだものかご／炎がどこにもない／字・数字が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
A game UI asset sheet on a flat solid green background (#00FF00), four separate items in a two-by-two grid with wide even spacing, each centered in its quarter, front view, no text, no letters, no numbers, no fire, no flames. Match the size, thick dark brown outline and soft anime painterly shading of the two emblems in the first reference image, but replace the flame theme. Top left: a badge shaped like a glossy wrapped candy in clear pale aqua and white with small twisted wrapper ends and a thin gold rim, with a plain empty cream-colored circle in its center. Top right: a badge shaped like a wreath of fresh young leaves in warm yellowish green with two tiny red berries and a thin gold rim, with a plain empty cream-colored circle in its center. Bottom left: a round brass medal with a raised relief of a pair of glass candy tongs crossed over a shining candy drop. Bottom right: a round brass medal with a raised relief of a young leafy sprig over a tiny fruit basket. Any green parts are a warm yellowish green, clearly different from the background. No shadows on the background.
```

## Claude のメモ
- 11/19 しょーくん「焦げ・火力・焼き加減はほのか固有。みなもたちは火と関係ない。カードの炎表示も飴特有のものを描きおろして」
- 1 ui-pow-minamo・2 ui-pow-wakaba＝カードの味パワーの紋章（cards-ui.js の powBadge・数字はまんなかの丸に）／3 ui-medal-minamo・4 ui-medal-wakaba＝夜の舞台の額縁の上のメダル（.dc-medal）
- 取りこむときは `prep_art.py parts <PNG> 180 ui-pow-minamo ui-pow-wakaba ui-medal-minamo ui-medal-wakaba --strict`

## Claude の確認（ここは依頼したチャットが書く）
