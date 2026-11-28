# 取組の演出：筆のエフェクトの部品（トンの線6つ・カットインのスピード線の帯）

状態：済
依頼日：2026-11-28
依頼したチャット：【sumo】
やり方：新しく描く
元の絵：なし
参考の絵：なし
大きさ：1536×1024（2枚とも）
背景：真っ黒 #000000（光るものなので黒の地・取りこむときに明るさをすけ具合にする）
年齢区分：全年齢
保存先：`out/sumo/enshutsu-fude.png`
ブランチ：`art/sumo-enshutsu-fude`
点検：2段とも別の1枚（`enshutsu-fude_step1.png`・`_step2.png`）／地は真っ黒・線は白か生成りだけ（色なし）／1＝短い筆の払いが3本ずつのまとまりが6つ（3×2）・となりとくっついていない・どれも右向きに外へ飛ぶ形／2＝横に長い筆のスピード線がたくさん・帯の左右のはしが、並べるとつながる（つなぎ目が目立たない）・左から右へ流れる向き／かすれ・飛び散りのある筆らしい線（定規の線ではない）／字・物・人なし

## 画像への指示（このまま使う）

1.
```
A game effect asset sheet on a solid pure black background (#000000): six separate small impact marks arranged in a grid of three columns and two rows with wide even spacing, each centered in its own cell and not touching its neighbors. Each mark is a group of three short, quick Japanese ink-brush flicks in white, fanning slightly outward and all pointing to the right, like the motion marks that burst out sideways when something lands with a thump: thick where the brush first touches, tapering to a thin dry-brush tail with a few tiny splatter dots. Vary the length, angle and dryness a little between the six groups. Only white and off-white strokes, no color, no glow, no text, no letters, no objects.
```

2.
```
A wide horizontal band of speed lines on a solid pure black background (#000000), seen flat: many long, thin, horizontal Japanese ink-brush streaks in white, of varied thickness and length, all flowing from left to right as if rushing past at high speed, with dry-brush texture, broken gaps and a few fine splatter flecks. The streaks are spread over the whole height, slightly denser toward the top and bottom and a little sparser in the middle. The left edge and the right edge must continue into each other without a visible seam when the image is repeated side by side. Only white and off-white, no color, no glow, no text, no letters, no objects.
```

## Claude のメモ
- 使い道：sumo の取組の演出。1＝土俵がトンとなるたびに土俵の両わきに出る線（ui/fx.js の tonMarks・いまは白い3本線。左がわは左右を反転して使う）／2＝本場所のカットインで力士がアップになるときの、うしろのスピード線（style.css の .vs-lines・いまは SVG の白い線。横にくり返して流す）
- 取りこむときは、明るさをすけ具合にして、色はコードでつける（白・生成り・朱など）。2 は横に2枚並べてつなぎ目を見る

## Claude の確認（ここは依頼したチャットが書く）
- 合格（11/28）。取りこんだ（sumo-game PR #22）
