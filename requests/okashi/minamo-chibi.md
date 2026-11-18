# みなものデフォルメ3まい（ショップのヒント用）

状態：済
依頼日：2026-11-18
依頼したチャット：【okashi】
やり方：元の絵を編集する
元の絵：`sources/okashi/minamo.png`
参考の絵：`sources/okashi/chibi-ref.png`（ほのかのデフォルメ。等身・線・塗りをこれにそろえる。人物はみなもに）
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/minamo-chibi.png`
ブランチ：`art/okashi-minamo-chibi`
点検：3まいが左右にはっきり分かれている／どれも元の絵のみなも（水色のひとつ結び・作務衣・前かけ）を、参考の絵と同じ2〜3頭身のデフォルメに／左＝考える（あごに指）・まんなか＝応援（小さくこぶし）・右＝すわって飴をなめる／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
Three separate chibi (2 to 3 heads tall) versions of the same girl from the original image, matching the chibi proportions, line work and coloring of the reference image, side by side with wide spacing: left, thinking with a finger on her chin; center, a small cool fist pump of encouragement; right, sitting and licking a small lollipop. Keep her light aqua low ponytail, gray work outfit and cream apron. Flat solid green background (#00FF00), no shadow on the background, no text.
```

## Claude のメモ
- ほのかの chibi-think・chibi-cheer・chibi-sit と同じ役目（夜のショップのヒント・まとめのシール）。みなもがシェフの夜に使う
- 取りこむ名前は minamo-chibi-think・minamo-chibi-cheer・minamo-chibi-sit（`prep_art.py three … 320 --strict`）

## Claude の確認（ここは依頼したチャットが書く）
- 11/18 23時55分 合格（PR #97）。mazemaze-okashiya の main に取りこんだ
