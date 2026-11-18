# ほのかの戦闘ポーズ（チャージ・攻撃3段・必殺技・決めポーズ）

状態：依頼中
依頼日：2026-11-18
依頼したチャット：【okashi】
やり方：編集（元の絵を直す）
元の絵：`sources/okashi/honoka-battle.png`（夜の戦闘ポーズ・右向き）
参考の絵：なし
大きさ：1024×1536
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/honoka-battle2.png`（各段は `out/okashi/honoka-battle2_step1.png` 〜 `_step6.png`）
ブランチ：`art/okashi-honoka-battle2`
点検：どの段も元の絵と同じ女の子（顔・赤いポニーテールとオレンジの毛先・白いコック帽・白いコックコート・赤いエプロンの炎マーク・ほっぺのすす・木のヘラ・画風・色の濃さ）／右を向いている（右にいるモンスターへ向けて）／全身が入って、まわりに余白がある（頭の上・足の下・炎や小物を切らない）／段ごとに、ポーズと表情が指示どおりにちがう／字・数字が入っていない

## 画像への指示（このまま使う）

1.
```
Keep the same girl, outfit, colors, art style, and full-body framing with margin around her, still turned to face right like the original. Change her pose to charging up power: feet planted wide, knees bent, the wooden spatula held close in front of her chest with both hands, warm orange flames and glowing embers gathering around the spatula and her hands, ponytail lifting in the rising heat, focused determined eyes. Keep all flames, sparkles, and props inside the image with margin, and keep her face and outfit clearly visible. Flat solid green background (#00FF00), no text.
```

2.
```
Keep the same girl, outfit, colors, art style, and full-body framing with margin around her, still turned to face right like the original. Change her pose to a quick light serve: stepping forward on one foot, one arm stretched out to the right holding a single round cookie on the flat of the wooden spatula, a short trail of sparkles behind the cookie, cheerful confident smile. Keep all flames, sparkles, and props inside the image with margin, and keep her face and outfit clearly visible. Flat solid green background (#00FF00), no text.
```

3.
```
Keep the same girl, outfit, colors, art style, and full-body framing with margin around her, still turned to face right like the original. Change her pose to a strong throw: body twisted with the throwing arm swung forward to the right just after tossing a cookie that flies away to the right with a small flame trail, back heel lifted, energetic open-mouthed shout. Keep all flames, sparkles, and props inside the image with margin, and keep her face and outfit clearly visible. Flat solid green background (#00FF00), no text.
```

4.
```
Keep the same girl, outfit, colors, art style, and full-body framing with margin around her, still turned to face right like the original. Change her pose to a powerful overhead swing: hopping slightly off the ground, both hands bringing the wooden spatula down from above her head toward the right, a big burst of warm flames bursting from the spatula, intense fired-up expression. Keep all flames, sparkles, and props inside the image with margin, and keep her face and outfit clearly visible. Flat solid green background (#00FF00), no text.
```

5.
```
Keep the same girl, outfit, colors, art style, and full-body framing with margin around her, still turned to face right like the original. Change her pose to her ultimate special move: a full spinning swing of the wooden spatula toward the right, a big swirling ring of bright flames and sparks around her, ponytail and apron flaring out, eyes blazing with determination, mouth open in a shout. Keep all flames, sparkles, and props inside the image with margin, and keep her face and outfit clearly visible. Flat solid green background (#00FF00), no text.
```

6.
```
Keep the same girl, outfit, colors, art style, and full-body framing with margin around her, still turned to face right like the original. Change her pose to a victory pose: body still angled to the right but face turned toward the viewer, winking and flashing a peace sign with one hand, the wooden spatula resting on her shoulder, a few happy sparkles, big proud grin. Keep all flames, sparkles, and props inside the image with margin, and keep her face and outfit clearly visible. Flat solid green background (#00FF00), no text.
```

## Claude のメモ
- 11/18 しょーくん「戦闘の立ち絵ももっともっと増やしたい」「チャージや攻撃必殺技とか、いつまで見てても飽きない戦闘シーンにしたい」→ えらぶ質問で、夜の舞台に大きいほのか（ちびほのかはショップのときだけ）
- 1 チャージ（発動の前）→ honoka-charge／2〜4 攻撃（カードの★で）→ honoka-atk1〜3／5 必殺技（大きい一撃・★3）→ honoka-special／6 決めポーズ（まんぞく！）→ honoka-win
- 取りこむときは元の絵（honoka-battle）と同じ四角で切る（prep_art.py の box）。舞台では右向きのまま使う

## Claude の確認（ここは依頼したチャットが書く）
- まだ
