# UI：昼の小物（営業中の札・評判のハートのびん・思っている吹き出しと しっぽ）

状態：済
依頼日：2026-11-18
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（画風・塗り・あたたかい光）・`sources/okashi/ui-now.png`（いまのゲームの画面。色と形のめやす。字はまねない）
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/ui-day2.png`
ブランチ：`art/okashi-ui-day2`
点検：参考の絵と同じ画風／4つが2×2に分かれている／1 ドアにかける木の吊り札（無地の横長の板・真ちゅうのふち・短いくさりとフック）／2 コルクのふたの丸いガラスびん（ふちと底と白い光の筋だけ・びんの中は背景の緑のまま）／3 もくもくの雲の形の思っている吹き出し（クリーム色・茶色の細いふち・ふちのでこぼこが同じ大きさで並ぶ＝9つに切ってのばせる・四すみにだけ小さなピンクの飾り・まんなか無地・しっぽなし）／4 しっぽの小さな丸2つ（中と小・同じ色とふち）／字・数字が入っていない

## 画像への指示（このまま使う）

1.
```
A game UI asset sheet on a flat solid green background (#00FF00), four separate items in a two-by-two grid with wide even spacing, each centered in its quarter, front view, no text, no letters, no numbers. Style: cozy wooden sweets shop, soft anime painterly shading matching the first reference image, warm lighting. Top left: a small hanging wooden sign for a shop door, a plain horizontal rounded wooden board with a thin brass trim, hanging from a short brass chain that meets at a small hook at the top, the board face plain and empty. Top right: a round glass jar with a cork lid and a small pink ribbon tied around its neck; draw the glass only as its outline, rim, base and a few soft white highlight streaks, and leave everything inside the jar as the flat green background so the inside can be cut out and filled later. Bottom left: an empty thought bubble body shaped like a soft fluffy cloud, a wide rounded shape about two and a half times wider than tall, cream white with a thin warm brown outline of even thickness, the bumps along its edges small and evenly spaced so it can be sliced into nine parts and stretched, tiny pink frosting dots only in the four corners, plain empty center, no tail. Bottom right: the matching thought bubble tail as two separate small round puffs, one medium and one small, placed diagonally, the same cream white with the same brown outline. No shadows on the background.
```

## Claude のメモ
- 11/18 昼のお願い H-021：1＝営業中の札（昼のドアの .ds-sign・字はコードで えいぎょう中／じゅんび中／へいてん）→ ui-sign／2＝評判のハートのびん（昼の右上と1日のまとめ・ハートはコードでびんのうしろに入れて、すけたガラスごしに見せる）→ ui-jar／3＝お客さんのすきな味の思っている吹き出し（.cu-bub.think・9分割）→ ui-think／4＝そのしっぽ（.cu-bub.think::after）→ ui-think-tail
- ui-day の5（評判のびん）は1まいの絵なので、こちらの ui-jar（中がぬける形）を使う
- 取りこむときは `prep_art.py parts … ui-sign ui-jar ui-think ui-think-tail`（上の段から左→右）。皮はリーダーが style.css の「UI の絵」で入れる

## Claude の確認（ここは依頼したチャットが書く）
- 11/18 18時すぎ 合格（PR #72）。札・びん（中がぬける）・思っている吹き出しと丸2つを使った（mazemaze-okashiya main ba3e28f）
