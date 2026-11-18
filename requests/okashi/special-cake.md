# ★3のくだものケーキ6つ（わかばのケーキのカードを編集）

状態：依頼中
依頼日：2026-11-19
依頼したチャット：【okashi】
やり方：編集
元の絵：`sources/okashi/cards-wakaba1.png`（わかばのケーキのカード6つ）
参考の絵：なし
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/special-cake.png`
ブランチ：`art/okashi-special-cake`
点検：元の絵と同じ位置に6つ（3×2）／どれも、元のケーキに熟したくだもの（りんご・きいちご・もも・みかん・ぶどう）をたっぷりのせた豪華な仕上がり／上の段 スポンジ→段のクリームケーキ・タルト→フルーツタルト・ロール→フルーツロール ／下の段 デコ→クリームと実の冠のデコケーキ・シフォン→実とハーブのシフォン・はちみつロール→実とはちみつ／元の絵と同じ塗り／人と字が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
Edit this image. Keep the six items in exactly the same grid positions, the same soft anime painterly style and the same flat solid green background (#00FF00). Turn each one into a grand finished fruit cake, a celebratory masterpiece dessert topped with glossy ripe fruits (red apple slices, raspberries, peach slices, mandarin segments and purple grapes), a little whipped cream, shiny glaze and small gold sparkles. Top row from left: the sponge cake becomes a tall layered cream cake crowned with the fruits; the tart shell becomes a fruit tart filled with custard and neatly arranged fruits; the roll cake becomes a fruit roll cake with fruits in the swirl and on top. Bottom row from left: the cream cake becomes a lavishly decorated cake with cream rosettes and a crown of fruits; the chiffon cake becomes a chiffon cake with fruits and a sprig of herb leaves; the honey roll becomes a honey roll cake with fruits and dripping golden honey. Each cake stays centered in its own cell, no people, no text, no letters. Any green parts are a warm yellowish green, clearly different from the background. No shadow on the background.
```

## Claude のメモ
- くだものケーキの★3（art.js の 'c:' と ★3 の special-<ケーキ>）。いまは★2と同じケーキのカードの絵
- 取りこむときは `prep_art.py parts … special-sponge special-tart special-roll special-deco special-chiffon special-hachiroll --strict`（上限300）

## Claude の確認（ここは依頼したチャットが書く）
