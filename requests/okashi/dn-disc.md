# UI：昼と夜の切りかえの円盤（上が昼・下が夜）

状態：依頼中
依頼日：2026-11-23
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（画風・塗り・あたたかい光・木の色）
大きさ：1024×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/dn-disc.png`
ブランチ：`art/okashi-dn-disc`
点検：まんまるの円盤が1つだけ・まんなかに大きく（まわりに緑のすき間）／上半分は昼の空（あたたかい金色〜あわい桃色・やわらかい雲・まるい太陽）／下半分は夜空（こい すみれ色〜紫・三日月・小さな星）／上下の境目は まんなかの横一直線で、やわらかくまざる／ふちは細い金と木のわく（お菓子屋さんの UI と同じ感じ）／地面・建物・人・字はない／上下をひっくり返しても おかしく見えない（三日月と星と太陽は どの向きでもよい形）

## 画像への指示（このまま使う）

1.
```
A single perfectly round decorative medallion disc, centered and large, on a plain solid green background #00FF00 with even green margin around it, matching the reference image in soft anime style with smooth painterly shading and warm lighting, like a cozy wooden sweets shop. The disc is split exactly in half by a horizontal line through its center that blends softly. The top half is a warm daytime sky in golden yellow and soft peach with a few fluffy cream clouds and a round glowing sun near the top. The bottom half is a deep plum and violet night sky with a golden crescent moon near the bottom edge and small twinkling stars. A thin ornate rim of polished gold and warm wood surrounds the whole disc. No ground, no buildings, no people, no text, no letters. Every element looks fine even when the disc is turned upside down. Game UI asset, clean edges.
```

## Claude のメモ
- 使い道（リーダー）：昼の閉店 → 夜・夜のまとめ → 朝 の切りかえ画面（11/23 しょーくん「○みたいな円があって ☀️ ○ 🌃 がクルッと回って切り替わる」「ロード画面として」）。円盤が180度まわって、昼なら夜が上に・夜なら昼が上に来る。字はなし（しょーくん）
- 取りこみは prep_art.py の one で dn-disc.webp（まるく切る）

## Claude の確認（ここは依頼したチャットが書く）
