# UI：朝昼の小さな札（数のバッジ・とくべつの札・名札・看板の札・空きのしるし2つ）

状態：済
依頼日：2026-11-19
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（画風・塗り・あたたかい光）・`sources/okashi/ui-now3.png`（いまの画面。左の材料だなのいちごの丸い数・「とくべつ」の札、右の陳列棚のお菓子の名前の札・「看板」の小さな札・空きのかごの点線が、いまコードでぬっている所。色と形のめやす・字はまねない）
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/ui-misc3.png`
ブランチ：`art/okashi-ui-misc3`
点検：6つが3×2のマスにはっきり分かれている／上の段 1 小さな丸いいちごの赤のバッジ（白いふち・まんなかは無地）・2 横長の金色の小さなリボンの札（はしは燕尾・まんなかは無地）・3 横長のクリーム色の小さな名札（うすい木のふち・まんなかは無地） ／下の段 4 ひもでつるした小さな木の看板の札（まんなかは無地）・5 丸い空きのしるし（クリーム色の点線の丸・まんなかは緑のまま）・6 角の丸い四角の空きのしるし（クリーム色の点線・まんなかは緑のまま）／札のまんなかは字をのせるので無地・9分割でのばせる形（1・5 は丸のまま）／字・数字が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
6 separate items in a three-by-two grid with wide even spacing, matching the reference image in soft anime style with smooth painterly shading and warm lighting, like a cozy wooden sweets shop. Top row from left: a small round strawberry red badge with a clean white rim and a soft glossy highlight, plain flat center; a small horizontal gold satin ribbon label with swallowtail ends and a plain flat center, evenly shaped so it can be sliced into nine parts and stretched sideways; a small horizontal cream paper name tag framed by a thin light wood border with rounded corners, plain flat center, evenly shaped so it can be sliced into nine parts and stretched sideways. Bottom row from left: a tiny wooden hanging sign plate on a short string with a plain flat center, evenly shaped so it can be sliced into nine parts; a round empty slot marker made of a soft cream dashed circle line, the inside left as plain flat solid green (#00FF00); a rounded square empty slot marker made of a soft cream dashed line, the inside left as plain flat solid green (#00FF00), evenly shaped so it can be sliced into nine parts and stretched. Each item centered in its own cell, seen from the front, no people, no text, no letters, no numbers. No shadow on the background, flat solid green background (#00FF00).
```

## Claude のメモ
- 11/19 夕方 しょーくん「ぜんぶ描き下ろし依頼してね」（見た目の総点検で、朝昼の小さな札がコードの色のままだった）
- 使い道（どれも昼のチャットの画面）：1 材料だなの数 .mt-n ／2 とくべつ .mt-pr.sp ／3 陳列棚の名前 .d-nm ／4 看板の札 .d-kl ／5 オーブンの空き .mo-slot::after ／6 陳列棚の空き .dslot.empty::after。値段 .mt-pr は今ある ui-price を使う
- 取りこみ：`prep_art.py parts … ui-badge ui-tag-gold ui-nametag ui-hangsign ui-empty-round ui-empty-sq`（上限 96・240・240・160・160・240）。取りこんだら、昼のチャットに名前と使い道を伝える（皮は昼のチャットが自分の CSS に入れてよい）

## Claude の確認（ここは依頼したチャットが書く）
- 11/19 夕方 合格（PR #158）。mazemaze-okashiya main fceb833 に取りこんだ（ui-badge 96・ui-tag-gold・ui-nametag・ui-empty-sq 240・ui-hangsign・ui-empty-round 160）。皮は昼のチャットが入れる
