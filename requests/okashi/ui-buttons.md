# UI：ボタン（大2・小2・タブ2・まる1）

状態：済
依頼日：2026-11-18
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（画風・塗り・あたたかい光）・`sources/okashi/ui-now.png`（いまのゲームの画面。色と形のめやす。字はまねない）
大きさ：1536×1024
背景：無地の緑 #00FF00（枠の内側の抜く所も緑）
年齢区分：全年齢
保存先：`out/okashi/ui-buttons.png`
ブランチ：`art/okashi-ui-buttons`
点検：参考の絵と同じ画風／木と真ちゅう＋小さなお菓子の飾り／ボタンの面はまんなかが無地（字をあとでのせる）・字も記号も入っていない／1段目：横長（横が高さの約5倍）の赤いキャンディのような光沢のボタン・真ちゅうのふち・左はしにいちご・右はしにクッキー／2段目：同じ大きさの木の板のボタン・真ちゅうのふち／3段目：小さな丸い横長のボタン2つ（クリーム色・チョコ色）／4段目：えらんだタブ（いちごの赤）・えらんでいないタブ（うすい木）・まるいボタン／形がゆがんでいない／背景は無地の緑

## 画像への指示（このまま使う）

1.
```
A game UI asset sheet on a flat solid green background (#00FF00), items in four horizontal rows with wide even spacing, each row centered, front view, no text, no letters, no icons on the button faces. Style: cozy wooden sweets shop, polished warm wood with thin brass trim and small sweets decorations. Soft anime painterly shading matching the first reference image, warm lighting. Row 1: one wide rounded rectangular main action button about five times wider than tall, a glossy candy-like strawberry red-orange face with a soft highlight along the top, a thin brass rim, a small strawberry ornament at the left end and a small round cookie ornament at the right end; the middle of the face is plain and even. Row 2: one wide rounded rectangular secondary button of the same size, a face of polished honey-brown wood planks with a thin brass rim and tiny brass rivets at both ends; the middle is plain. Row 3: two small rounded pill buttons side by side, each about three times wider than tall, the left with a cream caramel face and a brass rim, the right with a dark chocolate-brown wooden face and a brass rim. Row 4: from left to right, a selected tab button with a strawberry red fabric face, cream piping and a brass rim, an unselected tab button with a pale muted wood face and a brass rim, and a round button made of a brass ring with a cream center. All button faces are blank so text can be placed on top later. No shadows on the background.
```

## Claude のメモ
- 全画面のボタン：1＝大事なボタン（おもてなし！・お店をあけに行く・次のラウンドへ など）・2＝大きいサブ（仕入れ など）・3＝小さいボタン（とじる・入れかえ・はやおくり・うる）・4＝タブ（市場／雑貨屋）とまるいボタン（×）
- 字はコードで重ねる（全ゲームの決まり）。左右の飾りは切りわけて、まんなかはのばす（CSS の border-image）
- 11/18 しょーくん「ボタン・枠・フレームも妥協することなく全て絵を描き下ろしてほしい」「本気の1本にしたい」。素材は木と真ちゅう＋お菓子

## Claude の確認（ここは依頼したチャットが書く）
- 11/18 合格。7つを prep_art.py parts で切った（ui-btn-red・ui-btn-wood・ui-pill-cream・ui-pill-choco・ui-tab-on・ui-tab-off・ui-round）。えらんだタブのリボンは上のまんなかにあって9分割でのびてしまうので、リボンだけ ui-tab-bow に切りわけ、タブの面はリボンの下の日よけを左からうつしてつないだ
- 押した形・使えない形がない（11/18 司令塔の決まり）→ この絵を編集して ui-buttons2 で描く。PR #49 は取りこんで閉じた
