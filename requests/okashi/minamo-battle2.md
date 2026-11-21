# みなもの戦闘ポーズ（追加4まい・右向き）：中くらいの攻撃・大きい攻撃・温める・冷やす

状態：依頼中
依頼日：2026-11-21
依頼したチャット：【okashi】
やり方：編集（元の絵を直す）
元の絵：`sources/okashi/minamo.png`
参考の絵：なし
大きさ：1024×1536
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/minamo-battle2.png`（各段は `out/okashi/minamo-battle2_step1.png` 〜 `_step4.png`）
ブランチ：`art/okashi-minamo-battle2`
点検：どの段も元の絵と同じ女の子・同じ服と色／右を向いている（右にいるモンスターへ）／全身・まわりに余白／段ごとにポーズが指示どおりで、前に描いた攻撃（あめのかけらを飛ばす）と見分けがつく／背景は無地の緑だけ・字なし

## 画像への指示（このまま使う）

1.
```
Keep the same girl, outfit, colors, art style, and full-body framing with margin around her. Change her pose to a strong attack facing right: stepping forward with one foot, swinging the glass candy scissors in a wide arc so a ribbon of glossy clear candy whips toward the right, hair and sleeves flowing with the motion, determined eyes. Flat solid green background (#00FF00), no text.
```

2.
```
Keep the same girl, outfit, colors, art style, and full-body framing with margin around her. Change her pose to a powerful finishing attack facing right: both hands thrust forward, launching a large spinning flower made of sparkling glass candy toward the right, bright shards of light around it, a fierce focused expression. Flat solid green background (#00FF00), no text.
```

3.
```
Keep the same girl, outfit, colors, art style, and full-body framing with margin around her. Change her pose to warming candy facing right: holding a small copper pot in both hands, warm golden syrup glowing inside with gentle steam rising, a soft calm smile, warm orange light on her face. Flat solid green background (#00FF00), no text.
```

4.
```
Keep the same girl, outfit, colors, art style, and full-body framing with margin around her. Change her pose to cooling candy facing right: one palm held out toward the right, a cold pale blue mist and tiny frost crystals flowing from her hand, cool serious eyes, a faint icy glow on her face. Flat solid green background (#00FF00), no text.
```

## Claude のメモ
- 夜の舞台の大きいみなも。いまは atk1〜3 がみんな minamo-atk・温める／冷やすは minamo-support（11/21 しょーくん「既存戦闘シーンのバリエーション増加」）
- 1 minamo-atk2・2 minamo-atk3・3 minamo-heatup・4 minamo-heatdown。取りこんだら night-ui.js の POSE_MINAMO と feet.js（tools/feet.py）

## Claude の確認（ここは依頼したチャットが書く）
