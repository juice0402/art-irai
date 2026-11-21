# 新しいお客さん：エルフのうたうたい（セレナ・ピオ・3人目）のうれしい・ざんねんの顔

状態：待ち（okashi のほかの依頼が描けてから依頼中にする）
依頼日：2026-11-21
依頼したチャット：【okashi-hiru】
やり方：編集（元の絵を直す）
元の絵：段ごとにちがう（1・2＝`sources/okashi/new-elf-1.png`・3・4＝`sources/okashi/new-elf-2.png`・5・6＝`sources/okashi/new-elf-3.png`）。どの段も、その段の元の絵から編集する（前の段の結果は使わない）
参考の絵：なし
大きさ：1024×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/new-elf-face.png`（各段は `out/okashi/new-elf-face_step1.png` 〜 `_step6.png`）
ブランチ：`art/okashi-new-elf-face`
点検：どの段も元の絵と同じ人（髪型・髪色・毛の色・服・小物・画風・色）／正面向き・胸から上・顔の大きさと位置が元の絵と同じ／奇数の段はうれしい・偶数の段はざんねん（泣いていない）／字が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
Keep the same person, person, hair, outfit, accessories, colors, art style, and front-facing chest-up framing with the face the same size and position. Change only the expression and a small gesture: delighted and happy, a bright open smile, sparkling eyes, rosy cheeks, the long pointed ears lifted a little, one hand touching the lute strap. Flat solid green background (#00FF00), no text.
```

2.
```
Keep the same person, person, hair, outfit, accessories, colors, art style, and front-facing chest-up framing with the face the same size and position. Change only the expression and a small gesture: mildly disappointed in a graceful way, eyebrows drooping, a small pout, eyes glancing slightly down, the long pointed ears drooping a little. Not crying. Flat solid green background (#00FF00), no text.
```

3.
```
Keep the same person, person, hair, outfit, accessories, colors, art style, and front-facing chest-up framing with the face the same size and position. Change only the expression and a small gesture: delighted and happy, a big cheerful grin, sparkling eyes, rosy cheeks, holding the flute up a little higher. Flat solid green background (#00FF00), no text.
```

4.
```
Keep the same person, person, hair, outfit, accessories, colors, art style, and front-facing chest-up framing with the face the same size and position. Change only the expression and a small gesture: mildly disappointed in a cute way, eyebrows drooping, a small pout, the flute lowered, the long pointed ears drooping a little. Not crying. Flat solid green background (#00FF00), no text.
```

5.
```
Keep the same person, person, hair, outfit, accessories, colors, art style, and front-facing chest-up framing with the face the same size and position. Change only the expression and a small gesture: pleased and happy, a warm gentle smile with crinkled eyes, one hand resting on the chest. Flat solid green background (#00FF00), no text.
```

6.
```
Keep the same person, person, hair, outfit, accessories, colors, art style, and front-facing chest-up framing with the face the same size and position. Change only the expression and a small gesture: mildly disappointed, eyebrows drooping, a wry little smile, glancing slightly aside. Not crying. Flat solid green background (#00FF00), no text.
```

## Claude のメモ
- 11/21 しょーくん「常連さん大量に増やす」→ 新しい種族3つ（new-elf・new-vamp・new-tanuki）の表情
- 取りこむ名前は cust-elf・cust-elf-2・cust-elf-3 の -happy（奇数の段）・-sad（偶数の段）・`prep_art.py one … 480`
