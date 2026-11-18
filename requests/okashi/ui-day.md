# UI：朝と昼の棚・オーブン・看板・評判のびん

状態：待ち（前の依頼が済んだら、【okashi】が依頼中にする）
依頼日：2026-11-18
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（画風・塗り・あたたかい光）・`sources/okashi/ui-now.png`（いまのゲームの画面。色と形のめやす。字はまねない）
大きさ：1536×1024
背景：無地の緑 #00FF00（枠の内側の抜く所も緑）
年齢区分：全年齢
保存先：`out/okashi/ui-day.png`
ブランチ：`art/okashi-ui-day`
点検：参考の絵と同じ画風／4つが2×2に分かれている／1 2段の空の木の陳列棚（クリーム色の波形のふち・左右のはしは別の形で、棚板と波形は同じはばでくり返し、横にのばせる）／2 小さな丸いれんがのオーブンの口（中にあたたかいオレンジの光・中は空）／3 字のない木の立て看板（上がアーチ・真ちゅうのふち）／4 空の丸いガラスびん（コルクのふた・首にいちごの赤のリボン）／どれも中に何も入っていない・字が入っていない

## 画像への指示（このまま使う）

1.
```
A game UI asset sheet on a flat solid green background (#00FF00), four separate items in a two-by-two grid with wide even spacing, each centered in its quarter, front view, no text, no letters. Style: cozy wooden sweets shop. Soft anime painterly shading matching the first reference image, warm lighting. Top left: a wooden display shelf with two empty shelves and a small scalloped cream trim; the left and right sides are distinct end pieces, and the shelf boards and the scalloped trim repeat evenly so the shelf can be stretched sideways; the shelf boards are plain and empty. Top right: a small rounded brick oven opening with a warm orange glow inside and an empty dark baking space, framed in brick with a brass door hinge. Bottom left: a blank wooden standing signboard with a gentle arched top and a thin brass edge, the board surface plain. Bottom right: an empty round glass jar with a cork lid and a strawberry red ribbon tied around the neck, clear and shiny. Nothing inside any of them. No shadows on the background.
```

## Claude のメモ
- 1＝棚（.mshelf・.dcase）／2＝オーブン（.m-oven）／3＝看板の枠（kanbanSlot）／4＝評判のハートのびん（jarHTML・ハートはコード）。使い方は昼のチャットと相談（持ち主は昼のファイル）

## Claude の確認（ここは依頼したチャットが書く）
- まだ
