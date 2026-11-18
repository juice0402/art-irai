# お客さん4人の正面の絵（ふつうの顔・ファンタジーの町の人に描きなおし）

状態：依頼中
依頼日：2026-11-18
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/honoka.png`（画風・塗り・あたたかい光だけをそろえる。人物はまねしない）
大きさ：1024×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/customers3.png`（各段は `out/okashi/customers3_step1.png` 〜 `_step4.png`）
ブランチ：`art/okashi-customers3`
点検：4まいとも参考の絵と同じ画風（やわらかいアニメ調・なめらかな厚塗り・あたたかい光）／正面向き・胸から上・顔がまんなか・同じくらいの大きさ／1 妖精の子＝うすいピンクの髪の小さな女の子（7さいくらい）・花のかんむり・すけない小さな羽・花びらの服・2 けもみみの子＝オレンジがかった茶色の髪とねこ耳の男の子（14さいくらい）・クリーム色のチュニック・赤いマフラー・かばんのひも・3 冒険者＝20代のお兄さん・茶色の革のよろい・赤い短いマント・背中に剣の柄・4 魔女のおばあちゃん＝白髪のおだんご・丸めがね・むらさきのとんがり帽子（星の飾り）・ラベンダーのショール／学生服・スーツなど今の町の服ではない／緑の服や飾りがない（緑は抜くため）／4人とも赤い髪のコック姿ではない／ふつうのおだやかな顔／指や手の形がくずれていない／文字が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
A cute little fairy girl about seven years old with soft pastel pink hair in two short pigtails and a tiny crown of white and yellow flowers, small rounded opaque wings in pale peach and lavender behind her shoulders (not see-through), wearing a simple dress made of soft pink and cream flower petals. Front-facing chest-up portrait, face centered, looking at the viewer with a calm gentle smile. Cozy fantasy world of a sweets shop at the edge of a forest. Match only the soft anime art style, smooth painterly shading and warm light of the reference image, not its character. No green clothing or green accessories. Flat solid green background (#00FF00), no text.
```

2.
```
A friendly boy about fourteen years old with fluffy orange-brown hair and soft cat ears of the same color on top of his head, wearing a simple cream linen tunic with a warm red scarf and a brown leather satchel strap over one shoulder, like a young townsperson of a fantasy village. Front-facing chest-up portrait, face centered, looking at the viewer with a calm relaxed expression. Cozy fantasy world of a sweets shop at the edge of a forest. Match only the soft anime art style, smooth painterly shading and warm light of the reference image, not its character. No green clothing or green accessories. Flat solid green background (#00FF00), no text.
```

3.
```
A kind young man adventurer in his twenties with short tousled dark brown hair, wearing light brown leather armor over a cream shirt, a short deep red cape fastened with a brass clasp, and the hilt of a sword visible behind one shoulder. Front-facing chest-up portrait, face centered, looking at the viewer with a friendly easygoing smile. Cozy fantasy world of a sweets shop at the edge of a forest. Match only the soft anime art style, smooth painterly shading and warm light of the reference image, not its character. No green clothing or green accessories. Flat solid green background (#00FF00), no text.
```

4.
```
A warm elderly witch grandmother with white hair in a neat round bun and small round glasses, wearing a wide dark purple pointed witch hat with a small star charm and a lavender knitted shawl over a dark plum dress. Front-facing chest-up portrait, face centered, looking at the viewer with a gentle calm smile. Cozy fantasy world of a sweets shop at the edge of a forest. Match only the soft anime art style, smooth painterly shading and warm light of the reference image, not its character. No green clothing or green accessories. Flat solid green background (#00FF00), no text.
```

## Claude のメモ
- 11/18 しょーくん「この世界観で学生服の学生は合わない」「もっとファンタジー」→ 4人ぜんぶ描きなおし（えらぶ質問）：こども→妖精の子・学生さん→けもみみの子・おとなの人→冒険者・おばあちゃん→魔女のおばあちゃん。前の4人は customers1・customers2
- 昼の画面で、カウンターの前に正面で立つお客さん。取りこむ名前は前と同じ cust-kodomo・cust-gakusei・cust-otona・cust-obaachan（コードはそのまま絵が入れかわる）・`prep_art.py one … 480`
- 描けたら、この4まいを sources/okashi/cust2-<id>.png に置いて、customers4（うれしい・ざんねん）を依頼中にする

## Claude の確認（ここは依頼したチャットが書く）
- まだ
