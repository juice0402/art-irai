# ほのかの戦闘ポーズ「天板で焼く」：鉄のなべ → クッキーがならんだ天板に描きなおす

状態：依頼中
依頼日：2026-11-22
依頼したチャット：【okashi】
やり方：編集（元の絵を直す）
元の絵：`sources/okashi/honoka-battle.png`（夜の戦闘ポーズ・右向き）
参考の絵：`sources/okashi/field-tenpan.png`（場のカード「ほのかの天板」の絵。天板の形・色・クッキーをこれにそろえる）
大きさ：1024×1536
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/honoka-field-tenpan.png`
ブランチ：`art/okashi-honoka-field-tenpan`
点検：元の絵と同じ女の子（顔・赤いポニーテールとオレンジの毛先・白いコック帽・白いコックコート・赤いエプロンの炎マーク・ほっぺのすす・画風・色の濃さ）／右を向いている／両手で 黒っぽい鉄の四角い天板（ふちが低く立ち上がっている・取っ手や丸いなべの形ではない）を持って、右のほうへ力強く置こうとしている／天板の上にきつね色の丸いクッキーがならんでいる（参考の絵に近い）／天板のふちがほんのり熱でオレンジに光り、置くところに小さな炎がぱっと出る／やる気の笑顔／全身が入って、まわりに余白がある（頭の上・足の下・天板を切らない）／字・数字が入っていない

## 画像への指示（このまま使う）

1.
```
Keep the same girl, outfit, colors, art style, and full-body framing with margin around her, still turned to face right like the original. Change her pose to setting down her cooking field: holding a dark cast-steel rectangular baking sheet (an oven tray with low rolled rims, like the tray in the second reference image) level with both hands, with six round golden-brown cookies on it, and setting it down firmly toward the right, the rims of the tray glowing faintly orange with oven heat and a small burst of flames under it as it lands, determined grin. The tray has no handle and is not a round pan. Keep all flames, sparkles, and props inside the image with margin, and keep her face and outfit clearly visible. Flat solid green background (#00FF00), no text.
```

## Claude のメモ
- 11/22 場のカード「ほのかの鉄板」を「ほのかの天板」に変えて、カードの絵を天板にした（field-tenpan.md）→ しょーくん「ほのかの天板の件は描き直してお願い」。いまの honoka-field は丸い鉄のなべ（honoka-battle3.md の5）
- 取りこむときは名前を honoka-field のまま。元の絵（honoka-battle）と同じ四角で切る（`prep_art.py box … honoka-field 1000 42,168,991,1341`）→ tools/feet.py をかけなおす（天板の下の炎が足もとに入るなら FIX も見なおす）

## Claude の確認（ここは依頼したチャットが書く）
- まだ
