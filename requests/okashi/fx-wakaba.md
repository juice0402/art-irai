# わかばの夜のエフェクト：マスの下からのびる植物・調理台の若葉・葉と花びら

状態：済
依頼日：2026-11-19
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（画風・塗り・あたたかい光）
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/fx-wakaba.png`
ブランチ：`art/okashi-fx-wakaba`
点検：6つが3×2に分かれている／上の段 1 下のふちから上へのびる若いつると芽の束（たて長・下のふちはまっすぐ）・2 同じつるの束に白とピンクの小さな花と赤い実が1つ・3 横長の低い若葉と草の帯（下のふちはまっすぐ） ／下の段 4 若葉1まい・5 ピンクの花びら1まい・6 白い小さな花1つ／葉は黄みのあるあたたかい若草色（背景の緑とちがう色）／土・字・人が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
A game effect asset sheet on a flat solid green background (#00FF00), six separate items in a three-by-two grid with wide even spacing, each centered in its cell, soft anime painterly shading matching the reference image, warm lighting, no text, no letters, no soil, no people. Top row from left: a lively bunch of young curling vines and fresh sprouts shooting upward from a straight bottom edge, with small round leaves and tendrils, about twice as tall as wide; the same bunch of curling vines and sprouts with a few tiny white and pink blossoms and one small shiny red berry among the leaves; a long low horizontal band of short grass blades, little clover leaves and tiny sprouts with a straight bottom edge, about five times wider than tall. Bottom row from left: a single small fresh leaf; a single soft pink flower petal; a single tiny white five-petal flower with a yellow center. All leaves and stems are a warm yellowish spring green or light lime with darker olive shading, clearly different from the background green. No shadows on the background.
```

## Claude のメモ
- 11/19 しょーくん「ほのかは場全体に炎。わかばは植物が成長するとき、下から植物がニョキニョキっとなるエフェクトを描いて」
- 1 fx-sprout・2 fx-sprout-bloom＝くだものが育つ（熟した）ときマスの下からのびる（battle-fx.js の sproutFx）／3 fx-leafband＝わかばの夜の調理台のマスの下でそよぐ（vineHTML）／4 fx-leaf・5 fx-petal＝育つときに舞う／6 fx-flower＝熟したときの花
- 取りこむときは `prep_art.py parts <PNG> 320 fx-sprout fx-sprout-bloom fx-leafband fx-leaf fx-petal fx-flower --strict`（つるが分かれたら '-' で飛ばす）

## Claude の確認（ここは依頼したチャットが書く）
- 11/19 午前 合格（PR #139）。mazemaze-okashiya に取りこんだ
