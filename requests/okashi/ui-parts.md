# UI：味パワーの紋章・星・ななめの帯・まんぞくのハンコ

状態：済
依頼日：2026-11-18
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（画風・塗り・あたたかい光）・`sources/okashi/ui-now.png`（いまのゲームの画面。色と形のめやす。字はまねない）
大きさ：1536×1024
背景：無地の緑 #00FF00（枠の内側の抜く所も緑）
年齢区分：全年齢
保存先：`out/okashi/ui-parts.png`
ブランチ：`art/okashi-ui-parts`
点検：参考の絵と同じ画風／4つが2×2に分かれている／1 炎の形の紋章（オレンジと赤の炎・金のふち・まんなかは無地の丸）／2 ふっくらした金の星／3 まっすぐな横長の帯（ななめにしない・キャラメル色・ふちにクリーム色のステッチ・左右のはしが折れている・まんなか無地で横にのばせる）／4 花の形の赤いハンコの跡（まんなか無地・インクのむら）／字・数字が入っていない

## 画像への指示（このまま使う）

1.
```
A game UI asset sheet on a flat solid green background (#00FF00), four separate items in a two-by-two grid with wide even spacing, each centered in its quarter, front view, no text, no letters, no numbers. Style: cozy sweets shop. Soft anime painterly shading matching the first reference image, warm lighting. Top left: a flame-shaped emblem badge of glossy orange and red fire with a gold outline and a plain round cream center. Top right: a single plump shiny gold star with a soft highlight. Bottom left: a long straight horizontal banner ribbon about five times wider than tall, not slanted, warm caramel brown with cream stitching along both long edges and folded ends at the left and right, plain in the middle so it can be stretched sideways. Bottom right: a round red rubber stamp mark shaped like a flower with an empty plain center, slightly uneven like real ink. No shadows on the background.
```

## Claude のメモ
- 1＝カードとタイルの味パワーの紋章（powBadge・数字はコード）／2＝★／3＝おもてなしのはじめのななめの帯（battleIntro・ななめはコードで回す・9つに切って横にのばす）／4＝ラウンドの結果のハンコ（まんぞく！の字はコード）

## Claude の確認（ここは依頼したチャットが書く）
- 済（11/18・PR #65）：炎の紋章・金の星・横長の帯・花のハンコ、点検どおり。`prep_art.py parts` で ui-pow・ui-star・ui-band・ui-stamp に切って取りこんだ（mazemaze-okashiya b2aa60e）。帯は左右の折り返しを残して9分割でのばし、コードで-5度に回している
