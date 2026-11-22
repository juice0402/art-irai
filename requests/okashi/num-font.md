# 文字の絵：バトルのダメージの数字（0〜9・，・．・万・億・兆・京）

状態：依頼中
依頼日：2026-11-22
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/ui-now.png`（いまのゲームの画面。あたたかい木のお菓子屋さんの色と塗りのめやす。画面の字はまねない）
大きさ：1024×1536
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/num-font.png`
ブランチ：`art/okashi-num-font`
点検：16この字がはっきり分かれている（横4×たて4・重ならない）／上から 0 1 2 3／4 5 6 7／8 9 ，（コンマ）．（ピリオド）／万 億 兆 京 の順／どの字も同じ書き方・同じ太さ・同じ色（つやのある金色のキャラメル飴のような太い丸い字・上のほうにクリーム色の光・まわりに太いこげ茶のふち）／数字はどれも同じ高さで読みやすい（1 と 7、6 と 9、0 と 8 を見まちがえない）／漢字の形が正しい（万・億・兆・京）／コンマとピリオドは小さく下のほう／字のまわりにキラキラなどの飾りがない／ほかの字が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
A game font asset sheet for big damage numbers in a cozy fantasy sweets-shop card game, on a flat solid green background (#00FF00), sixteen separate characters arranged in a grid of four columns and four rows with wide even spacing, each centered in its own cell and not touching its neighbors. Every character is drawn in exactly the same lettering style, thickness and colors: very bold, chunky, rounded, slightly playful numerals that look like glossy golden caramel candy, with a soft cream-white shine on the upper part, warm amber shading toward the bottom, and a thick dark chocolate-brown outline all the way around each character, soft anime painterly shading matching the warm colors of the reference image. The digits must be clear and easy to read at a glance. Row 1: 0, 1, 2, 3. Row 2: 4, 5, 6, 7. Row 3: 8, 9, a comma, a period. Row 4: the Japanese kanji 万, 億, 兆, 京, written correctly in the same candy lettering style. All digits have the same height; the comma and the period are small and sit low near the bottom of their cells. No sparkles, no decorations, no drop shadows on the background, and no other letters or text.
```

## Claude のメモ
- 11/22 しょーくん「戦闘画面で作り込んでないところがあるとすれば、ダメージの数字。1〜9とか、万とかも、描き下ろしで世界観に合致するように」。いまは Dela Gothic One の字に こげ茶のふちと光（style-battle.css の .fx-dmg・舞台の数字 .fh-num）
- 使い道：num-0〜num-9・num-comma・num-dot・num-man・num-oku・num-cho・num-kei。1文字ずつの絵を並べて数字にする（battle-fx.js）。大きい一撃は CSS で少し明るく
- 取りこむときは `prep_art.py parts <PNG> 200 num-0 num-1 … num-kei --strict`（上の段から左→右・金色に緑が混ざらないように --strict）

## Claude の確認（ここは依頼したチャットが書く）
- まだ
