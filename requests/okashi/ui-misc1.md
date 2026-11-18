# UI：のこりの札・板・マス（コードの絵のままの所）

状態：待ち（前の依頼が済んだら、【okashi】が依頼中にする）
依頼日：2026-11-18
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/ui-now2.png`（いまの画面。色と形のめやす・字はまねない）・`sources/okashi/cards1.png`（画風）
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/ui-misc1.png`
ブランチ：`art/okashi-ui-misc1`
点検：上の段 こげ茶の木の小さな札（横長・真ちゅうの細いふち・まんなかは無地）・クリーム色の紙の横長の行（うすい木のふち・まんなかは無地）・木のトレーの板（ふちが少し高い・まんなかは無地のあたたかい木） ／下の段 材料をのせる小さな四角い木のマス（クリーム色の内側）・オーブンの台の丸い空きの受け皿（まんなかは暗いくぼみ）・がまぐちのお財布（小さなアイコン）／6つが3×2のマスにはっきり分かれている／参考の絵と同じ画風／人と字が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
6 separate items in a three-by-two grid with wide even spacing, matching the reference image in soft anime style with smooth painterly shading and warm lighting. Top row from left: a small horizontal dark brown wooden label plate with a thin polished brass rim and rounded ends, plain flat center, evenly shaped so it can be sliced into nine parts and stretched sideways; a long horizontal cream paper strip framed by a thin light wood border with tiny rounded corners, plain center, evenly shaped so it can be sliced into nine parts and stretched; a rectangular wooden serving tray seen from above with a slightly raised rim and warm plain wood in the middle, evenly shaped so it can be sliced into nine parts and stretched. Bottom row from left: a small square wooden tile frame with a cream colored inset, front view; an empty round ceramic dish slot seen from the front with a dark empty hollow in the middle; a small cute clasp coin purse in strawberry red with a brass clasp, icon style. Each item centered in its own cell, seen from the front or slightly from above, no people, no text, no letters, no numbers. The plates and frames are made of warm wood and polished brass like a cozy sweets shop. No shadow on the background, flat solid green background (#00FF00).
```

## Claude のメモ
- 11/18 夜 しょーくん「ボタンとか、作り込んでない箇所も全て作りきって」→ いまコードで描いている所：夜の舞台の上のラウンドと味パワーの札 .ov-top>span・朝の札 .mo-hint・.md-tip・昼の .d-tip・お財布 .m-wallet・ショップの .sh-coin・.sh-ttl → ui-label／雑貨屋の品物の行・ドラッグの札 → ui-strip／焼けたお菓子の台 .m-baked・まとめの .sum → ui-tray／材料だなのマス .mt・天板の .mw → ui-tile／オーブンの丸 .mo-slot → ui-ovenslot／お財布のアイコン → ui-purse
- 取りこむときは `prep_art.py parts … ui-label ui-strip ui-tray ui-tile ui-ovenslot ui-purse`（上限は 320・480・480・160・160・128 で回を分ける）。皮はリーダーが style.css の「UI の絵」で入れる（昼の画面の所は「昼のチャットから」に書いて伝える）

## Claude の確認（ここは依頼したチャットが書く）
- まだ
