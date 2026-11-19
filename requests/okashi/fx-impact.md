# 演出：一撃の衝撃（シェフごとに 衝撃の輪と斬撃の2つずつ・光るので黒い背景）

状態：依頼中
依頼日：2026-11-19
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（画風・塗り・あたたかい光）
大きさ：1536×1024
背景：無地の黒 #000000（光るものなので黒。透明にしなくてよい）
年齢区分：全年齢
保存先：`out/okashi/fx-impact.png`
ブランチ：`art/okashi-fx-impact`
点検：6つが3×2のマスに分かれていて重なっていない／上の段は まるい衝撃の輪（まんなかが白く明るく、外へ広がる）：1 炎と火の粉（赤・オレンジ・金）・2 水しぶきと氷のかけら（水色・白）・3 花びらと若葉（ピンク・クリーム・黄緑）／下の段は ななめの三日月の斬撃（右上から左下へ・太い光の弧と細いすじ）：4 炎の斬撃・5 水の斬撃・6 花びらの斬撃／どれも やわらかく光る／人・物・字が入っていない／背景は無地の黒だけ

## 画像への指示（このまま使う）

1.
```
6 separate glowing visual effects in a three-by-two grid with wide even spacing on a flat solid black background (#000000), matching the reference image in soft anime style with smooth painterly glow and warm lighting, for a cozy sweets shop card game. Top row: three round impact bursts, each with a bright white hot center and shock rings and particles spreading outward: left, fire and glowing embers in red, orange and gold; middle, water splash droplets and small ice shards in light aqua and white; right, swirling pink petals and fresh light green leaves with soft cream light. Bottom row: three diagonal crescent slash arcs sweeping from upper right to lower left, each a thick glowing arc of light with thin speed streaks along it: left, a fire slash with embers; middle, a water slash with spray droplets; right, a petal slash with flower petals and small leaves. Each effect centered in its own cell and not touching the others, no people, no objects, no text, no letters, no numbers, flat solid black background.
```

## Claude のメモ
- 11/19 夕方 しょーくん「戦闘アニメーションやカードの処理をもっとゆっくり豪華に、リッチに演出したい・1攻撃5秒くらい・攻撃の迫力が見たい」「枠外にも何か演出がほしい」→ えらぶ質問で「演出の絵も頼む（シェフごと）」
- 使い方：一撃の瞬間、モンスターの上に衝撃の輪（大きくなって消える）・シェフからモンスターへ斬撃（ななめに走る）。mix-blend-mode: screen で黒がぬける（ui-flame と同じ）。動かすのは transform と opacity だけ
- 取りこみ：`prep_art.py parts … fx-burst-honoka fx-burst-minamo fx-burst-wakaba fx-slash-honoka fx-slash-minamo fx-slash-wakaba`（上限 480）。黒い背景はそのまま（抜かない）

## Claude の確認（ここは依頼したチャットが書く）
