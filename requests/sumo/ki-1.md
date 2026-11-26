# 気（オーラ）の部品 その1：桜の花びら3つ・和紙の紙吹雪5色

状態：済
依頼日：2026-11-26
依頼したチャット：【sumo】
やり方：新しく描く
元の絵：なし
参考の絵：なし
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/sumo/ki-1.png`
ブランチ：`art/sumo-ki-1`
点検：横4×たて2の8つが、はっきり分かれている（となりと重ならない）／上の段：左から 開いた桜の花びら1まい・ひらりと反った花びら1まい・小さな花びら1まい・朱の和紙の紙片／下の段：左から 藍・金・深緑・生成りの和紙の紙片（どれも小さな四角で、少し反って紙のすじが見える）／人・字が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
A game particle asset sheet on a flat solid pure green background (#00FF00), eight separate small items in a grid of four columns and two rows with wide even spacing, each centered in its own cell and not touching its neighbors, no text, no letters, no people. Top row, left to right: one single soft pale pink cherry blossom petal lying open with a small notch at its tip and delicate veins; one single cherry blossom petal curling and twisting as if fluttering in the air; one small cherry blossom petal seen slightly edge-on; one small square of vermilion red Japanese washi paper confetti, slightly curled, with visible paper fibers. Bottom row, left to right: small squares of the same washi paper confetti, each slightly curled with visible fibers, in deep indigo blue, warm gold, deep green, and warm ivory. Rich, highly detailed realistic rendering with soft lighting, elegant and premium. No shadows on the background.
```

## Claude のメモ
- 11/26 しょーくん「気も作っちゃって！！」。気（data/auras.js）の桜吹雪（a_sakura）と紙吹雪（a_kamifubuki）の粒。いまは ui/aura.js のコードの楕円と四角
- 取りこむときは 4×2 に切って緑を抜く（ki-petal1〜3・ki-conf-shu・ki-conf-ai・ki-conf-kin・ki-conf-midori・ki-conf-kinari）

## Claude の確認（ここは依頼したチャットが書く）
- 合格（11/26）。8つとも取りこんだ（ki-petal1〜3・ki-conf-*）
