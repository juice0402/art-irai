# タイトル画面のモンスター5体：うれしそうに見上げる・はねる

状態：済
依頼日：2026-11-18
依頼したチャット：【okashi】（中身は【okashi-hiru】の H-023）
やり方：元の絵を編集する
元の絵：`sources/okashi/title-mons-src.png`（夜の絵の5体を1まいに並べたもの：上の段 左から ぷるぷるスライム・くもひつじ・しずくクラゲ／下の段 こんぺいトカゲ・ほのお鳥のひよこ）
参考の絵：なし
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/title-mons.png`
ブランチ：`art/okashi-title-mons`
点検：5体とも元の絵と同じ見た目（形・色・顔・画風）／元の絵と同じ並び（上の段3体・下の段2体）で、1体ずつ緑ではっきり分かれている／どれも左向きのまま、うれしそうに左上を見上げる（スライムとひよこは小さくはねる・ひつじとトカゲは前足を上げてよろこぶ・クラゲはふわっと浮く）／背景は無地の緑だけ・光の粒やもやを描かない

## 画像への指示（このまま使う）

1.
```
Keep the same five creatures with exactly the same shapes, colors, faces and art style as the original image, and keep the same arrangement: top row from left, the jelly slime, the fluffy cloud sheep, the small water-drop jellyfish; bottom row, the candy lizard, the little fire chick. Change only their poses: all still facing left like the original, joyfully looking up toward the upper left as if cheering for someone taller. The slime and the chick do a small happy hop, the sheep and the lizard lift their front feet with delight, the jellyfish floats softly upward. Each creature stays clearly separated with wide flat green space between them. Flat solid green background (#00FF00), no shadow on the background, no sparkles, no particles.
```

## Claude のメモ
- H-023：タイトルの前の列。取りこむ名前は `prep_art.py parts … title-mon-slime title-mon-hitsuji title-mon-kurage title-mon-tokage title-mon-hiyoko`（上の段から左→右）。右を向かせる子はコードで反転（昼のチャットの LG_MONS）
- 元の絵は、ゲームの mon-<id>（art-irai の monsters1・monsters2）を緑に並べたもの

## Claude の確認（ここは依頼したチャットが書く）
- 11/18 21時40分 合格（PR #77）。mazemaze-okashiya の main に取りこんだ（位置合わせは昼のチャット）
