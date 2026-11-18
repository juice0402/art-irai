# お客さん4人の うれしい・ざんねん の顔（customers3 の編集）

状態：済
依頼日：2026-11-18
依頼したチャット：【okashi】
やり方：編集（元の絵を直す）
元の絵：段ごとにちがう（1・2＝`sources/okashi/cust2-kodomo.png`、3・4＝`sources/okashi/cust2-gakusei.png`、5・6＝`sources/okashi/cust2-otona.png`、7・8＝`sources/okashi/cust2-obaachan.png`）。どの段も、その段の元の絵から編集する（前の段の結果は使わない）
参考の絵：なし
大きさ：元の絵と同じ
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/customers4.png`（各段は `out/okashi/customers4_step1.png` 〜 `_step8.png`）
ブランチ：`art/okashi-customers4`
点検：どの段も元の絵と同じ人（顔・髪型・髪の色・耳・羽・服・帽子・アクセサリー・画風・色の濃さ）／正面向き・胸から上・顔の大きさと位置が元の絵とほぼ同じ／うれしい＝すきな味を見つけてにっこり、ざんねん＝しょんぼり（泣かない・こわくない・やさしいコメディ）／指や手の形がくずれていない／文字が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.（元の絵：`sources/okashi/cust2-kodomo.png`・うれしい）
```
Keep the same fairy girl, hair, flower crown, petal dress, small wings, colors, art style, and front-facing chest-up framing with the face the same size and position. Change only the expression and a small gesture: delighted and happy, a big open-mouthed smile, sparkling eyes, rosy cheeks, both small hands clasped together in front of her chest, her wings lifted a little. Flat solid green background (#00FF00), no text.
```

2.（元の絵：`sources/okashi/cust2-kodomo.png`・ざんねん）
```
Keep the same fairy girl, hair, flower crown, petal dress, small wings, colors, art style, and front-facing chest-up framing with the face the same size and position. Change only the expression and a small gesture: mildly disappointed in a cute way, eyebrows drooping, a small pout, eyes glancing slightly down, wings drooping a little. Not crying. Flat solid green background (#00FF00), no text.
```

3.（元の絵：`sources/okashi/cust2-gakusei.png`・うれしい）
```
Keep the same cat-eared boy, hair, cat ears, tunic, red scarf, satchel strap, colors, art style, and front-facing chest-up framing with the face the same size and position. Change only the expression and a small gesture: pleasantly surprised and happy, a bright wide grin, eyes lit up, cat ears perked straight up. Flat solid green background (#00FF00), no text.
```

4.（元の絵：`sources/okashi/cust2-gakusei.png`・ざんねん）
```
Keep the same cat-eared boy, hair, cat ears, tunic, red scarf, satchel strap, colors, art style, and front-facing chest-up framing with the face the same size and position. Change only the expression and a small gesture: mildly disappointed, a small frown, eyes glancing aside, cat ears folded down a little. Not crying. Flat solid green background (#00FF00), no text.
```

5.（元の絵：`sources/okashi/cust2-otona.png`・うれしい）
```
Keep the same young man adventurer, hair, leather armor, red cape, sword hilt, colors, art style, and front-facing chest-up framing with the face the same size and position. Change only the expression and a small gesture: cheerfully pleased, a broad warm grin, eyes squinting happily, one thumb up near his chest. Flat solid green background (#00FF00), no text.
```

6.（元の絵：`sources/okashi/cust2-otona.png`・ざんねん）
```
Keep the same young man adventurer, hair, leather armor, red cape, sword hilt, colors, art style, and front-facing chest-up framing with the face the same size and position. Change only the expression and a small gesture: mildly let down, an awkward small smile, eyebrows drooping, one hand scratching the back of his head. Not crying. Flat solid green background (#00FF00), no text.
```

7.（元の絵：`sources/okashi/cust2-obaachan.png`・うれしい）
```
Keep the same witch grandmother, white bun, round glasses, purple witch hat, lavender shawl, colors, art style, and front-facing chest-up framing with the face the same size and position. Change only the expression and a small gesture: warmly delighted, a soft happy smile with eyes crinkled, one hand touching her cheek. Flat solid green background (#00FF00), no text.
```

8.（元の絵：`sources/okashi/cust2-obaachan.png`・ざんねん）
```
Keep the same witch grandmother, white bun, round glasses, purple witch hat, lavender shawl, colors, art style, and front-facing chest-up framing with the face the same size and position. Change only the expression and a small gesture: a little disappointed, a gentle wistful smile, eyebrows slightly lowered, eyes glancing down. Not crying. Flat solid green background (#00FF00), no text.
```

## Claude のメモ
- 取りこむ名前は前と同じ cust-<id>-happy・cust-<id>-sad（奇数の段＝happy・偶数＝sad）・`prep_art.py one … 480`（ふつうの絵と同じ大きさ）

## Claude の確認（ここは依頼したチャットが書く）
- 11/18 18時20分 合格（PR #75）。8まいを cust-<id>-happy・-sad に（mazemaze-okashiya main af3f757）
