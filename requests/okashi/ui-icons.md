# UI：焼き加減の炎のアイコン4つ・チュートリアルの指・吹き出し

状態：済
依頼日：2026-11-18（16時に吹き出しを足した）
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（画風・塗り・あたたかい光）・`sources/okashi/ui-now.png`（いまのゲームの画面。色と形のめやす。字はまねない）
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/ui-icons.png`
ブランチ：`art/okashi-ui-icons`
点検：参考の絵と同じ画風／2段に分かれている／1段目：同じ形の小さな炎のアイコンが4つ（左から クリーム色の白・レモン色・オレンジ・光る金）・どれもまんなかは無地の丸（あとで数字をのせる）／2段目：左から 人さし指で左上を指す、かわいい白い手（ほかの指はにぎる・うすい茶の輪郭・やわらかい影）・からっぽの吹き出し（横長の角の丸い四角・クリーム色がかった白・茶色の細いふち・四すみにだけ小さなピンクの飾り・辺はまっすぐで同じ太さ＝9つに切ってのばせる・まんなか無地・しっぽはない）・吹き出しのしっぽだけ（下を指す小さな丸い三角・同じ色とふち・上の辺はふちなしで平ら）の3つ／字・数字が入っていない

## 画像への指示（このまま使う）

1.
```
A game UI icon sheet on a flat solid green background (#00FF00), items in two rows with wide even spacing, front view, no text, no letters, no numbers. Soft anime painterly shading matching the first reference image, warm lighting, clean thin dark brown outlines. Row 1: four small flame icons of exactly the same rounded teardrop flame shape side by side, each with a plain empty round center: the first pale cream white, the second soft lemon yellow, the third warm orange, the fourth shining gold with a gentle glow. Row 2, three separate items left to right: first, one cute cartoon white hand pointing up and to the left with the index finger, the other fingers curled, soft rounded shapes, light cream shading and a thin brown outline, used as a tap hint in a game tutorial; second, an empty speech bubble body with no tail, a wide rounded rectangle about two and a half times wider than tall, soft cream white paper with a thin warm brown outline of even thickness, tiny pink frosting dots only in the four corners, straight plain edges so it can be sliced into nine parts and stretched, plain empty center; third, the matching speech bubble tail as a separate small piece, a short rounded triangle pointing down, the same cream white with the same brown outline on its two slanted sides, its flat top edge without an outline. No shadows on the background.
```

## Claude のメモ
- 11/18 しょーくん「火力の炎やチュートリアルの指、攻撃力のアイコンなんかも全て描き下ろして欲しい」。味パワーの紋章は ui-parts の1
- 1段目＝焼き加減の炎のアイコン（cookIcon：生・半焼け・こんがり・サイコー。数字はコード）→ ui-cook0〜3／2段目＝夜のヒントの白い指（tips.js）→ ui-finger・お客さんの吹き出し（昼の .cu-bub・11/18 しょーくん「来客の吹き出しも書き下ろしにして欲しい」）と夜のヒントの吹き出し（.tipb）→ ui-bubble（9分割でのばす）・ui-bubble-tail（しっぽ・コードで重ねる）
- 取りこむときは `prep_art.py parts … ui-cook0 ui-cook1 ui-cook2 ui-cook3 ui-finger ui-bubble ui-bubble-tail`（上の段から左→右）

## Claude の確認（ここは依頼したチャットが書く）
- 済（11/18・PR #64）：炎4つ・指・吹き出し・しっぽ、点検どおり。`prep_art.py parts` で ui-cook0〜3・ui-finger・ui-bubble・ui-bubble-tail に切って取りこんだ（mazemaze-okashiya b2aa60e）。吹き出しは夜のヒントとお客さんに9分割で使っている
