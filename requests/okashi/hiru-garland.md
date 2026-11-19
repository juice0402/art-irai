# UI：お祭りの日の旗（横にくりかえすガーランド・昼）

状態：依頼中
依頼日：2026-11-19
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（画風・塗り・あたたかい光）・`sources/okashi/ui-now.png`（いまのゲームの画面。色と形のめやす。字はまねない）
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/hiru-garland.png`
ブランチ：`art/okashi-hiru-garland`
点検：参考の絵と同じ画風／横一列のひもに三角の小旗（ピンク・黄色・クリーム）／ひもは左のはしと右のはしに同じ高さでつながっている（横にならべてもつながる）／はしの旗が切れていない／字が入っていない／青い色がない／背景は無地の緑

## 画像への指示（このまま使う）

1.
```
A game UI asset on a flat solid green background (#00FF00): one long horizontal festival bunting garland in a single straight row across the middle of the image, no text, no letters, no numbers, no blue colors. Style: cozy wooden sweets shop festival, soft anime painterly shading matching the first reference image, warm lighting. A thin warm brown string runs perfectly straight and level across the full width of the image, touching the left edge and the right edge at exactly the same height, so the image can be repeated side by side as a seamless pattern. From the string hang eight small triangular pennant flags pointing down, evenly spaced, in a repeating order of pink, yellow and cream, each with a tiny stitched border; the first and last flags are fully inside the image and not cut off, with the same gap to the edges as the gap between flags. The garland is about one sixth as tall as it is wide. No shadows on the background.
```

## Claude のメモ
- H-033（昼のお願い・11/19）。入口は昼のコードにある：ui-garland（お祭りの日の舞台の上・高さ30px・横にくりかえす＝CSS の repeat-x）
- 取りこむときは `prep_art.py parts <PNG> 640 ui-garland`。左右のはしでひもがつながらないときは、ひもの高さでそろえて切りなおす

## Claude の確認（ここは依頼したチャットが書く）
