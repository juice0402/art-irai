# ★3のタワー：菓子パンの6つ（こね生地）

状態：済
依頼日：2026-11-18
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cookie-tower.png`（★3 クッキータワーの画風・大きさ・きらきらの豪華さにそろえる）
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/pan3.png`
ブランチ：`art/okashi-pan3`
点検：上の段 メロンタワー（メロンパンを高くつみあげた塔）・クリームタワー（クリームパンの塔）・ロールタワー（シナモンロールの塔） ／下の段 あんパンタワー（あんパンの塔）・コロネタワー（チョココロネの塔）・パンタワー（ふっくらパンの塔）／6つが3×2のマスにはっきり分かれている／参考の絵と同じ画風／人と字が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
6 separate items in a three-by-two grid with wide even spacing, matching the reference image in soft anime style with smooth painterly shading and warm lighting. Top row from left: a tall tower of stacked melon breads with criss-cross cookie crusts; a tall tower of golden cream buns with custard peeking out; a tall tower of swirled cinnamon rolls with white icing. Bottom row from left: a tall tower of round sweet bean buns with a sesame top; a tall spiral tower of chocolate cornets with chocolate cream; a tall tower of fluffy round bread rolls with a glossy golden crust. Each item centered in its own cell, seen from the front or slightly from above, no people, no text, no letters, no numbers. Each tower looks like a grand celebration bakery piece with small gold sparkles on it. No shadow on the background, flat solid green background (#00FF00).
```

## Claude のメモ
- こね生地の★3（同じ形どうし）。art.js の NOUN_ID にパンの形を足してある（メロンパン→melonpan・クリームパン→creampan・ロール→roll・あんパン→anpan・コロネ→koronet・パン→pan）
- 取りこむときは `prep_art.py parts … special-melonpan-tower special-creampan-tower special-roll-tower special-anpan-tower special-koronet-tower special-pan-tower`（上限300）

## Claude の確認（ここは依頼したチャットが書く）
- 11/18 23時55分 合格（PR #98）。mazemaze-okashiya の main に取りこんだ
