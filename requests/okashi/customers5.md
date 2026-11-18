# お客さんの見た目ちがい8人（ふつうの顔・妖精の子・けもみみの子・冒険者・魔女のおばあちゃんを2人ずつ）

状態：待ち（前の依頼が済んだら、【okashi】が依頼中にする）
依頼日：2026-11-18
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/honoka.png`（画風・塗り・あたたかい光だけをそろえる。人物はまねしない）
大きさ：1024×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/customers5.png`（各段は `out/okashi/customers5_step1.png` 〜 `_step8.png`）
ブランチ：`art/okashi-customers5`
点検：8まいとも参考の絵と同じ画風／正面向き・胸から上・顔がまんなか・同じくらいの大きさ／8人がぜんぶ別の人に見える（髪型・髪色・服の色・小物がちがう）／妖精の子は羽・けもみみの子は動物の耳・冒険者は武具・魔女のおばあちゃんはとんがり帽子で、種類がわかる／緑の服や小物がない／字が入っていない

## 画像への指示（このまま使う）

1.
```
A cute little fairy boy about seven years old with short fluffy lemon-yellow hair and a tiny acorn cap, small rounded opaque wings in pale yellow and soft orange behind his shoulders (not see-through), wearing a simple tunic made of autumn leaves in orange and warm brown. Front-facing chest-up portrait, face centered, looking at the viewer with a calm gentle smile. Cozy fantasy world of a sweets shop at the edge of a forest. Match only the soft anime art style, smooth painterly shading and warm light of the reference image, not its character. No green clothing or green accessories. Flat solid green background (#00FF00), no text.
```

2.
```
A cute little fairy girl about six years old with long wavy lilac hair and a small white bow made of flower petals, small rounded opaque wings in pale lavender and light blue behind her shoulders (not see-through), wearing a simple dress of white and lilac petals, holding a tiny shining dewdrop in one hand. Front-facing chest-up portrait, face centered, looking at the viewer with a calm gentle smile. Cozy fantasy world of a sweets shop at the edge of a forest. Match only the soft anime art style, smooth painterly shading and warm light of the reference image, not its character. No green clothing or green accessories. Flat solid green background (#00FF00), no text.
```

3.
```
A friendly girl about fourteen years old with a short silver-gray bob and soft gray cat ears of the same color on top of her head, wearing a mustard yellow hooded cloak over a white blouse and a small round brass bell on a ribbon necklace, like a young townsperson of a fantasy village. Front-facing chest-up portrait, face centered, looking at the viewer with a calm gentle smile. Cozy fantasy world of a sweets shop at the edge of a forest. Match only the soft anime art style, smooth painterly shading and warm light of the reference image, not its character. No green clothing or green accessories. Flat solid green background (#00FF00), no text.
```

4.
```
A friendly boy about thirteen years old with black spiky hair and soft floppy black dog ears on top of his head, round glasses, wearing a navy vest over a cream shirt and a shoulder bag with rolled paper scrolls peeking out, like a young townsperson of a fantasy village. Front-facing chest-up portrait, face centered, looking at the viewer with a calm gentle smile. Cozy fantasy world of a sweets shop at the edge of a forest. Match only the soft anime art style, smooth painterly shading and warm light of the reference image, not its character. No green clothing or green accessories. Flat solid green background (#00FF00), no text.
```

5.
```
A kind young woman adventurer in her twenties with long blonde hair in a high ponytail, wearing a light silver chest plate over a white tunic, a short deep blue cape, and a wooden bow visible behind one shoulder. Front-facing chest-up portrait, face centered, looking at the viewer with a calm gentle smile. Cozy fantasy world of a sweets shop at the edge of a forest. Match only the soft anime art style, smooth painterly shading and warm light of the reference image, not its character. No green clothing or green accessories. Flat solid green background (#00FF00), no text.
```

6.
```
A big friendly man adventurer in his late twenties with short red hair and a short trimmed beard, wearing a dark brown leather vest over a mustard shirt, with a round wooden shield visible on his back. Front-facing chest-up portrait, face centered, looking at the viewer with a calm gentle smile. Cozy fantasy world of a sweets shop at the edge of a forest. Match only the soft anime art style, smooth painterly shading and warm light of the reference image, not its character. No green clothing or green accessories. Flat solid green background (#00FF00), no text.
```

7.
```
A warm elderly witch grandmother with long gray hair in a loose braid over one shoulder, wearing a deep burgundy wide-brimmed witch hat with a small feather, and a cream knitted cardigan, holding a small wooden wand with a tiny glowing tip. Front-facing chest-up portrait, face centered, looking at the viewer with a calm gentle smile. Cozy fantasy world of a sweets shop at the edge of a forest. Match only the soft anime art style, smooth painterly shading and warm light of the reference image, not its character. No green clothing or green accessories. Flat solid green background (#00FF00), no text.
```

8.
```
A cheerful plump elderly witch grandmother with short curly silver hair and half-moon spectacles, wearing a navy pointed witch hat with a small crescent moon charm and a mustard knitted shawl, with a small black cat peeking over her shoulder. Front-facing chest-up portrait, face centered, looking at the viewer with a calm gentle smile. Cozy fantasy world of a sweets shop at the edge of a forest. Match only the soft anime art style, smooth painterly shading and warm light of the reference image, not its character. No green clothing or green accessories. Flat solid green background (#00FF00), no text.
```

## Claude のメモ
- 11/18 昼のお願い H-021（しょーくん「服も何もかも同じ人が再度来店すると、また戻ってきたのかなって思っちゃう」）→ えらぶ質問で 4種類を3人ずつ（いまの1人＋2人）
- 段と取りこむ名前：1 cust-kodomo-2・2 cust-kodomo-3・3 cust-gakusei-2・4 cust-gakusei-3・5 cust-otona-2・6 cust-otona-3・7 cust-obaachan-2・8 cust-obaachan-3（`prep_art.py one … 480`）。day-scene.js の custVariants が絵があれば別の人として出す
- 取りこんだら、各段を `sources/okashi/cust5-<名前>.png`（例 cust5-kodomo-2.png）に置いてから、うれしい・ざんねんの customers6（-2 の4人）・customers7（-3 の4人）を頼む

## Claude の確認（ここは依頼したチャットが書く）
- まだ
