# みなもの素材2と、レアの素材2

状態：依頼中
依頼日：2026-11-18
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（まんなかのクッキーの画風・塗り・大きさにそろえる）
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/cards-minamo5.png`
ブランチ：`art/okashi-cards-minamo5`
点検：上の段 しんじゅ貝のパール糖（真珠みたいな砂糖の粒）・あまミズチのシロップ（とろりとした透きとおったシロップのびん）・にじいろの水あめ（にじいろに光る水あめのびん） ／下の段 きらきらミント（きらきら光るミントの葉の束）／4つが3×2のマスにはっきり分かれている／参考の絵と同じ塗り／人と字が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
4 separate fantasy sweets-shop items in a three-by-two grid with wide even spacing, matching the center cookie in the reference image in soft anime style with smooth painterly shading and warm lighting and size. Top row from left: pearly round sugar beads in an open seashell; a small bottle of clear honey-like syrup with a tiny water-dragon tag; a small jar of rainbow-shimmering clear syrup. Bottom row from left: a small bundle of sparkling pale aqua mint leaves. Each item centered in its own cell, seen slightly from above, no people, no text, no letters. Any green parts are a warm yellowish green or pale minty aqua, clearly different from the background. No shadow on the background, flat solid green background (#00FF00).
```

## Claude のメモ
- 取りこむときは `prep_art.py parts … card-pearl card-mizuchi card-niji card-minto --strict`（上の段から左→右・上限300）。緑っぽい物が消えたら外側だけ抜く
- claude/okashi-builds.md のみなものカード（名前と id は仮・11/18 リーダー）
- card-niji・card-minto はレアモンスターの素材（朝の材料・MATS の niji・minto）

## Claude の確認（ここは依頼したチャットが書く）
- まだ
