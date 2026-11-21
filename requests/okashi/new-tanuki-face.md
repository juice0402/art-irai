# 新しいお客さん：行商のたぬき（ポン吉・ポン太・3人目）のうれしい・ざんねんの顔

状態：済
依頼日：2026-11-21
依頼したチャット：【okashi-hiru】
やり方：編集（元の絵を直す）
元の絵：段ごとにちがう（1・2＝`sources/okashi/new-tanuki-1.png`・3・4＝`sources/okashi/new-tanuki-2.png`・5・6＝`sources/okashi/new-tanuki-3.png`）。どの段も、その段の元の絵から編集する（前の段の結果は使わない）
参考の絵：なし
大きさ：1024×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/new-tanuki-face.png`（各段は `out/okashi/new-tanuki-face_step1.png` 〜 `_step6.png`）
ブランチ：`art/okashi-new-tanuki-face`
点検：どの段も元の絵と同じ人（髪型・髪色・毛の色・服・小物・画風・色）／正面向き・胸から上・顔の大きさと位置が元の絵と同じ／奇数の段はうれしい・偶数の段はざんねん（泣いていない）／字が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
Keep the same character, character, fur colors and markings, outfit, accessories, colors, art style, and front-facing chest-up framing with the face the same size and position. Change only the expression and a small gesture: delighted and happy, a big open-mouthed grin, eyes squeezed happily, rosy cheeks, the round ears perked up. Flat solid green background (#00FF00), no text.
```

2.
```
Keep the same character, character, fur colors and markings, outfit, accessories, colors, art style, and front-facing chest-up framing with the face the same size and position. Change only the expression and a small gesture: mildly disappointed, eyebrows drooping, a small frown, the round ears drooping, one paw scratching the cheek. Not crying. Flat solid green background (#00FF00), no text.
```

3.
```
Keep the same character, character, fur colors and markings, outfit, accessories, colors, art style, and front-facing chest-up framing with the face the same size and position. Change only the expression and a small gesture: delighted and happy, a big open-mouthed smile, sparkling eyes, holding the abacus up proudly. Flat solid green background (#00FF00), no text.
```

4.
```
Keep the same character, character, fur colors and markings, outfit, accessories, colors, art style, and front-facing chest-up framing with the face the same size and position. Change only the expression and a small gesture: mildly disappointed in a cute way, a small pout, eyebrows drooping, the round ears drooping. Not crying. Flat solid green background (#00FF00), no text.
```

5.
```
Keep the same character, character, fur colors and markings, outfit, accessories, colors, art style, and front-facing chest-up framing with the face the same size and position. Change only the expression and a small gesture: pleased and happy, a warm smile with crinkled eyes behind the round glasses, rosy cheeks. Flat solid green background (#00FF00), no text.
```

6.
```
Keep the same character, character, fur colors and markings, outfit, accessories, colors, art style, and front-facing chest-up framing with the face the same size and position. Change only the expression and a small gesture: mildly disappointed in a gentle way, eyebrows drooping, a soft wistful sigh with a small smile. Not crying. Flat solid green background (#00FF00), no text.
```

## Claude のメモ
- 11/21 しょーくん「常連さん大量に増やす」→ 新しい種族3つ（new-elf・new-vamp・new-tanuki）の表情
- 取りこむ名前は cust-tanuki・cust-tanuki-2・cust-tanuki-3 の -happy（奇数の段）・-sad（偶数の段）・`prep_art.py one … 480`

## Claude の確認（ここは依頼したチャットが書く）
- 11/21 合格（PR #206）。まぜまぜおかし屋の枝 hiru/newcust（PR #29）に cust-tanuki・-2・-3 の -happy・-sad として取りこんだ
