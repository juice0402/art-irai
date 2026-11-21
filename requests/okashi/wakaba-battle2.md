# わかばの戦闘ポーズ（追加4まい・右向き）：中くらいの攻撃・大きい攻撃・育てる・びんに入れる

状態：済
依頼日：2026-11-21
依頼したチャット：【okashi】
やり方：編集（元の絵を直す）
元の絵：`sources/okashi/wakaba.png`
参考の絵：なし
大きさ：1024×1536
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/wakaba-battle2.png`（各段は `out/okashi/wakaba-battle2_step1.png` 〜 `_step4.png`）
ブランチ：`art/okashi-wakaba-battle2`
点検：どの段も元の絵と同じ女の人・同じ服と色・三つ編み／右を向いている（右にいるモンスターへ）／全身・まわりに余白／段ごとにポーズが指示どおり／背景は無地の緑だけ・字なし

## 画像への指示（このまま使う）

1.
```
Keep the same woman, outfit, colors, braid, art style, and full-body framing with margin around her. Change her pose to a strong attack facing right: a cheerful overhand throw, tossing a shiny round berry toward the right with a trail of small leaves and petals behind it, braid swinging, a bright playful smile. Flat solid green background (#00FF00), no text.
```

2.
```
Keep the same woman, outfit, colors, braid, art style, and full-body framing with margin around her. Change her pose to a powerful finishing attack facing right: arms raised high as a big swirl of fresh fruits, green leaves and flower petals bursts forward toward the right, a joyful confident expression. Flat solid green background (#00FF00), no text.
```

3.
```
Keep the same woman, outfit, colors, braid, art style, and full-body framing with margin around her. Change her pose to growing plants facing right: watering with a small tin watering can tilted toward the right, sparkling water drops falling, tiny green sprouts and buds popping up near the water, a gentle warm smile. Flat solid green background (#00FF00), no text.
```

4.
```
Keep the same woman, outfit, colors, braid, art style, and full-body framing with margin around her. Change her pose to making jam facing right: hugging a large glass jar half full of glossy red fruit jam against her side with one arm, dropping a ripe strawberry into it with the other hand, a happy satisfied smile. Flat solid green background (#00FF00), no text.
```

## Claude のメモ
- 夜の舞台の大きいわかば。いまは atk1〜3 がみんな wakaba-atk・育てる／水やりは wakaba-support（11/21 しょーくん「既存戦闘シーンのバリエーション増加」）
- 1 wakaba-atk2・2 wakaba-atk3・3 wakaba-grow（POSE の field＝育つ・水やり）・4 wakaba-jar（飴ジャムの夜の support）。取りこんだら night-ui.js の POSE_WAKABA と feet.js

## Claude の確認（ここは依頼したチャットが書く）
- 11/21 12時半 合格。mazemaze-okashiya の main b876b59 に取りこんだ（Version 144）
