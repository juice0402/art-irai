# UI：陳列棚（木の棚板・カゴ・飾り棚の枠）・看板・オーブン・評判のびん

状態：待ち（前の依頼が済んだら、【okashi】が依頼中にする）
依頼日：2026-11-18（16時すぎに棚を木の棚＋カゴに直した）
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（画風・塗り・あたたかい光）・`sources/okashi/ui-now.png`（いまのゲームの画面。色と形のめやす。字はまねない）
大きさ：1536×1024
背景：無地の緑 #00FF00（枠の内側の抜く所も緑）
年齢区分：全年齢
保存先：`out/okashi/ui-day.png`
ブランチ：`art/okashi-ui-day`
点検：参考の絵と同じ画風／6つが3×2に分かれている／1 横長の木の棚板（クリーム色の波形のふち・左右のはしは別の形・棚板と波形は同じはばでくり返し横にのばせる）／2 空の編みカゴ（白いレースの紙をしいた・少し上から見た・中は空）／3 字のない木の立て看板（上がアーチ・真ちゅうのふち・まんなかは無地）／4 小さな丸いれんがのオーブンの口（中にあたたかいオレンジの光・中は空）／5 空の丸いガラスびん（コルクのふた・首にいちごの赤のリボン）／6 木の飾り棚の外わく（四すみに小さなお菓子の飾り・内側は緑で抜ける・辺は同じはばでくり返し9つに切ってのばせる）／どれも中に何も入っていない・字が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
A game UI asset sheet on a flat solid green background (#00FF00), six separate items in a three-by-two grid with wide even spacing, each centered in its own cell, no text, no letters, no numbers. Style: cozy wooden sweets shop, soft anime painterly shading matching the first reference image, warm lighting. Top left: a long horizontal wooden shelf board with a small scalloped cream trim hanging under its front edge, front view; the left and right ends are distinct end pieces, and the board and the scalloped trim repeat evenly so it can be stretched sideways; nothing on it. Top center: an empty round woven wicker basket lined with a white lace paper doily, seen slightly from above, nothing inside. Top right: a small wooden standing signboard with an arched top and a thin polished brass rim, the board face plain and blank. Bottom left: a small rounded brick oven opening with a warm orange glow inside and an empty dark baking space, front view. Bottom center: an empty round glass jar with a cork lid and a strawberry red ribbon tied around its neck, front view. Bottom right: a rectangular wooden display cabinet frame, front view, warm honey wood with tiny sweets ornaments (a cookie, a strawberry, a candy, a macaron) on its four corners, the inside of the frame empty and filled with the same flat green background, the four sides plain and even so the frame can be sliced into nine parts and stretched. No shadows on the background.
```

## Claude のメモ
- 11/18 16時すぎ しょーくん「陳列棚もさ、白いただの四角だし、まったく何かよくわからないよね」「カゴか木製の棚か、何か世界観に合ったビジュアル」→ えらぶ質問で「木の棚＋カゴ」。次に頼む順は ui-day と ui-chips が先（しょーくん）
- 商品を並べる画面（昼のチャットの morning.js・.dcase と .dslot）：6＝飾り棚の外わく（.dcase・9分割）・1＝段ごとの棚板（1段＝3マス・横にのばす）・2＝マスごとのカゴ（お菓子はカゴの上にのる）・3＝まんなかの看板のマス（kanbanSlot・字はコード）
- 4＝キッチンのオーブン（.m-oven）／5＝評判のハートのびん（jarHTML・ハートはコード）
- 取りこむときは `prep_art.py parts … ui-shelf-board ui-basket ui-kanban ui-oven ui-jar ui-cabinet`（上の段から左→右）。皮はリーダーが style.css の「UI の絵」で入れる（昼のチャットには「いまは .dcase・.dslot の見た目を直さないで」と伝える）

## Claude の確認（ここは依頼したチャットが書く）
- まだ
