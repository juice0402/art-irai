# お客さんの見た目ちがい（-2 の4人）のうれしい・ざんねんの顔

状態：済
依頼日：2026-11-18
依頼したチャット：【okashi】
やり方：編集（元の絵を直す）
元の絵：段ごとにちがう（1・2＝`sources/okashi/cust5-kodomo-2.png`・3・4＝`sources/okashi/cust5-gakusei-2.png`・5・6＝`sources/okashi/cust5-otona-2.png`・7・8＝`sources/okashi/cust5-obaachan-2.png`）。どの段も、その段の元の絵から編集する（前の段の結果は使わない）。customers5 を取りこんでから置く
参考の絵：なし
大きさ：1024×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/customers6.png`（各段は `out/okashi/customers6_step1.png` 〜 `_step8.png`）
ブランチ：`art/okashi-customers6`
点検：どの段も元の絵と同じ人（髪型・髪色・服・小物・画風・色）／正面向き・胸から上・顔の大きさと位置が元の絵と同じ／奇数の段はうれしい・偶数の段はざんねん（泣いていない）／字が入っていない

## 画像への指示（このまま使う）

1.
```
Keep the same person, hair, outfit, accessories, colors, art style, and front-facing chest-up framing with the face the same size and position. Change only the expression and a small gesture: delighted and happy, a big open-mouthed smile, sparkling eyes, rosy cheeks, both small hands clasped together in front of the chest, wings lifted a little. Flat solid green background (#00FF00), no text.
```

2.
```
Keep the same person, hair, outfit, accessories, colors, art style, and front-facing chest-up framing with the face the same size and position. Change only the expression and a small gesture: mildly disappointed in a cute way, eyebrows drooping, a small pout, eyes glancing slightly down, wings drooping a little. Not crying. Flat solid green background (#00FF00), no text.
```

3.
```
Keep the same person, hair, outfit, accessories, colors, art style, and front-facing chest-up framing with the face the same size and position. Change only the expression and a small gesture: delighted and happy, a big bright smile, sparkling eyes, rosy cheeks, the animal ears perked up high, one hand raised in a small cheerful wave. Flat solid green background (#00FF00), no text.
```

4.
```
Keep the same person, hair, outfit, accessories, colors, art style, and front-facing chest-up framing with the face the same size and position. Change only the expression and a small gesture: mildly disappointed in a cute way, eyebrows drooping, a small pout, the animal ears drooping down. Not crying. Flat solid green background (#00FF00), no text.
```

5.
```
Keep the same person, hair, outfit, accessories, colors, art style, and front-facing chest-up framing with the face the same size and position. Change only the expression and a small gesture: delighted and happy, a big warm grin, sparkling eyes, giving a thumbs-up with one hand. Flat solid green background (#00FF00), no text.
```

6.
```
Keep the same person, hair, outfit, accessories, colors, art style, and front-facing chest-up framing with the face the same size and position. Change only the expression and a small gesture: mildly disappointed, eyebrows drooping, a wry little smile, scratching the back of the head with one hand. Not crying. Flat solid green background (#00FF00), no text.
```

7.
```
Keep the same person, hair, outfit, accessories, colors, art style, and front-facing chest-up framing with the face the same size and position. Change only the expression and a small gesture: delighted and happy, a big warm smile with crinkled eyes, rosy cheeks, one hand on the cheek in delight. Flat solid green background (#00FF00), no text.
```

8.
```
Keep the same person, hair, outfit, accessories, colors, art style, and front-facing chest-up framing with the face the same size and position. Change only the expression and a small gesture: mildly disappointed in a gentle way, eyebrows drooping, a small sigh with a soft wistful smile. Not crying. Flat solid green background (#00FF00), no text.
```

## Claude のメモ
- 11/18 昼のお願い H-021（お客さんの見た目ちがい・4種類を3人ずつ）。customers5 の -2 の4人の表情
- 取りこむ名前は cust-<id>-2-happy（奇数の段）・cust-<id>-2-sad（偶数の段）・`prep_art.py one … 480`

## Claude の確認（ここは依頼したチャットが書く）
- 11/18 22時 合格（PR #83）。cust-<id>-2-happy・-sad（main 06050a0）
