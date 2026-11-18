# お客さん4人の うれしい・ざんねん の顔（customers1 の編集）

状態：依頼中
依頼日：2026-11-18
依頼したチャット：【okashi】
やり方：編集（元の絵を直す）
元の絵：段ごとにちがう（1・2＝`sources/okashi/cust-kodomo.png`、3・4＝`sources/okashi/cust-gakusei.png`、5・6＝`sources/okashi/cust-otona.png`、7・8＝`sources/okashi/cust-obaachan.png`）。どの段も、その段の元の絵から編集する（前の段の結果は使わない）
参考の絵：なし
大きさ：元の絵と同じ
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/customers2.png`（各段は `out/okashi/customers2_step1.png` 〜 `_step8.png`）
ブランチ：`art/okashi-customers2`
点検：どの段も元の絵と同じ人（顔・髪型・髪の色・服・アクセサリー・画風・色の濃さ）／正面向き・胸から上・顔の大きさと位置が元の絵とほぼ同じ／うれしい＝すきな味を見つけてにっこり、ざんねん＝しょんぼり（泣かない・こわくない・やさしいコメディ）／指や手の形がくずれていない／文字が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.（元の絵：`sources/okashi/cust-kodomo.png`・うれしい）
```
Keep the same little girl, hair, red ribbons, yellow dress, colors, art style, and front-facing chest-up framing with the face the same size and position. Change only her expression and a small gesture: delighted and happy, a big open-mouthed smile, sparkling eyes, rosy cheeks, both small hands clasped together in front of her chest. Flat solid green background (#00FF00), no text.
```

2.（元の絵：`sources/okashi/cust-kodomo.png`・ざんねん）
```
Keep the same little girl, hair, red ribbons, yellow dress, colors, art style, and front-facing chest-up framing with the face the same size and position. Change only her expression: mildly disappointed in a cute way, eyebrows drooping, a small pout, eyes glancing slightly down, shoulders a little slumped. Not crying. Flat solid green background (#00FF00), no text.
```

3.（元の絵：`sources/okashi/cust-gakusei.png`・うれしい）
```
Keep the same teenage boy, hair, school blazer, shirt, striped tie, bag strap, colors, art style, and front-facing chest-up framing with the face the same size and position. Change only his expression: pleasantly surprised and happy, a bright wide grin, eyes lit up, eyebrows raised. Keep his hand holding the bag strap as it is. Flat solid green background (#00FF00), no text.
```

4.（元の絵：`sources/okashi/cust-gakusei.png`・ざんねん）
```
Keep the same teenage boy, hair, school blazer, shirt, striped tie, bag strap, colors, art style, and front-facing chest-up framing with the face the same size and position. Change only his expression: a little disappointed, an awkward lopsided smile, eyebrows lowered, eyes looking aside. Keep his hand holding the bag strap as it is. Not crying. Flat solid green background (#00FF00), no text.
```

5.（元の絵：`sources/okashi/cust-otona.png`・うれしい）
```
Keep the same woman, hair, cream blouse, green cardigan, earrings, colors, art style, and front-facing chest-up framing with the face the same size and position. Change only her expression: delighted, a warm happy smile with slightly closed joyful eyes and a light blush. Flat solid green background (#00FF00), no text.
```

6.（元の絵：`sources/okashi/cust-otona.png`・ざんねん）
```
Keep the same woman, hair, cream blouse, green cardigan, earrings, colors, art style, and front-facing chest-up framing with the face the same size and position. Change only her expression: gently disappointed, a small resigned smile, eyebrows tilted down, as if quietly sighing. Not crying. Flat solid green background (#00FF00), no text.
```

7.（元の絵：`sources/okashi/cust-obaachan.png`・うれしい）
```
Keep the same grandmother, white hair bun, round glasses, lavender cardigan, cream blouse, colors, art style, and front-facing chest-up framing with the face the same size and position. Change only her expression: beaming happily, eyes closed into gentle crescents, a wide warm smile, rosy cheeks. Flat solid green background (#00FF00), no text.
```

8.（元の絵：`sources/okashi/cust-obaachan.png`・ざんねん）
```
Keep the same grandmother, white hair bun, round glasses, lavender cardigan, cream blouse, colors, art style, and front-facing chest-up framing with the face the same size and position. Change only her expression: a little disappointed in a gentle way, eyebrows drooping, a soft "oh dear" look with a small closed-mouth smile, head tilted slightly. Not crying. Flat solid green background (#00FF00), no text.
```

## Claude のメモ
- 昼の画面で、すきな味のお菓子があった・なかったときの顔（H-002 の3）。元の絵は customers1（PR #43）の4まい（緑の背景のまま）
- ゲームの名前は `cust-<人>-ureshii`・`cust-<人>-zannen`（人＝kodomo・gakusei・otona・obaachan）

## Claude の確認（ここは依頼したチャットが書く）
- まだ
