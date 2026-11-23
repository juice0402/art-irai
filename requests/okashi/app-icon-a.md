# アプリのアイコン 案A：ほのかの顔のアップ（キャラメル色の地）

状態：済
依頼日：2026-11-24
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/honoka.png`（ほのかの姿・画風・塗り）
大きさ：1024×1024
背景：地まで描く（キャラメル色）。緑はいらない・透明なし
年齢区分：全年齢
保存先：`out/okashi/app-icon-a.png`
ブランチ：`art/okashi-app-icon-a`
点検：参考の絵と同じ ほのか（赤い髪のポニーテール・白いコック帽・白いコックコート・こはく色の目）／顔が大きく まんなか（四すみは iPhone が丸くするので、大事な所は まんなかの8割に）／泡立て器を顔の近くに・小さな炎か火の粉／地は キャラメル色〜あたたかいオレンジの なめらかなグラデーションで四すみまで／字・ロゴ・ふち・枠・透明なし／小さくしても ほのかだと わかる はっきりした形

## 画像への指示（このまま使う）

1.
```
A square mobile game app icon, 1024x1024, full-bleed artwork that fills the whole square to all four corners. Close-up bust portrait of the girl in the reference image: the same young pastry chef with long red hair in a high ponytail, a white chef hat, a white double-breasted chef coat, warm amber eyes, a big cheerful smile with slightly flushed cheeks. She holds a metal whisk raised next to her face, with a few small warm sparks and a tiny playful flame flickering at its tip. Her face is large and centered, about 60 percent of the icon, and every important part stays inside the central 80 percent of the square. Background: smooth warm caramel-orange gradient with a soft glow behind her head and a few subtle sugar sparkles. Soft anime style with smooth painterly shading and warm lighting, matching the reference image. Bold, clear silhouette that reads well at small sizes. No text, no letters, no logos, no border, no frame, no transparency.
```

## Claude のメモ
- 使い道（リーダー）：App Store のアプリのアイコン（【ios】の ios-kobo #27・しょーくん「Codex に描いてもらう」・11/24 えらぶ質問で 案A「ほのかの顔のアップ」と 案B「スライムがクッキーをぱくっ」・地は キャラメル色）。案A と 案B を並べて しょーくんが えらぶ
- 取りこみ：1536×1024 で来たら まんなかを 1024 の四角に切る → mazemaze-okashiya の docs/kobo/icon.png（1024×1024・PNG・透明なし）→【ios】に知らせる

## Claude の確認（ここは依頼したチャットが書く）
- 11/24 合格（PR #343 の1回目・1254×1254 で来た）。しょーくんが「案A（顔を大きく）」をえらんだ＝左7%・上0から 幅80% の四角に切りぬいて 1024×1024 の PNG に → mazemaze-okashiya の docs/kobo/icon.png（main 069da11）。泡立て器の炎は少し切れる
