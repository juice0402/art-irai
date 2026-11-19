# 夜のお客さんの食べる顔とまんぞく顔：にじいろクラゲ・ミントうさぎ

状態：依頼中
依頼日：2026-11-19
依頼したチャット：【okashi】
やり方：編集
元の絵：`sources/okashi/monsters3.png`（左 にじいろクラゲ・右 ミントうさぎ）
参考の絵：なし
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/monfaces3.png`（各段は `out/okashi/monfaces3_step1.png`・`_step2.png`）
ブランチ：`art/okashi-monfaces3`
点検：2体とも元の絵と同じ位置・大きさ・色・体の形・左向き／1段目＝口を大きくあけて、おいしそうにぱくっと食べる顔（目はぎゅっ・ほっぺがふくらんで赤い・食べ物は描かない）／2段目＝おなかいっぱいで目を閉じたにこにこ顔（ほっぺが赤い・少しまるくゆったり）／元の絵と同じ塗り／人と字が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
Edit this image. Keep both monsters in exactly the same positions, the same size, the same colors and body shapes, still facing left, the same soft anime painterly style and the same flat solid green background (#00FF00). Change only their faces: each monster is happily eating, mouth wide open as if taking a big delicious bite, eyes squeezed shut with delight, cheeks puffed and rosy. No food, no people, no text, no shadow on the background.
```

2.
```
Edit this image. Keep both monsters in exactly the same positions, the same size, the same colors and body shapes, still facing left, the same soft anime painterly style and the same flat solid green background (#00FF00). Change only their faces and posture a little: each monster is blissfully full and satisfied, eyes closed in happy upward arcs, a soft contented smile, rosy blush on the cheeks, body slightly rounder and relaxed. No food, no people, no text, no shadow on the background.
```

## Claude のメモ
- monfaces1 と同じ（食べる顔・まんぞく顔）。ミントうさぎは緑に近いので --strict
- 取りこむときは `prep_art.py two … mon-nijikurage-eat mon-mintousagi-eat --strict`（1段目）・`mon-nijikurage-happy mon-mintousagi-happy --strict`（2段目）

## Claude の確認（ここは依頼したチャットが書く）
