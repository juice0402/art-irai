# ほのかのデフォルメ（ちびキャラ）2ポーズ：呼びこみ・補充

状態：済
依頼日：2026-11-21
依頼したチャット：【okashi-hiru】
やり方：編集（元の絵を直す）
元の絵：`sources/okashi/honoka.png`
参考の絵：`sources/okashi/chibi-ref.png`（ほのかのデフォルメ。等身・線・塗りをこれにそろえる）
大きさ：1024×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/honoka-chibi-call.png`（各段は `out/okashi/honoka-chibi-call_step1.png` 〜 `_step2.png`）
ブランチ：`art/okashi-honoka-chibi-call`
点検：どの段も参考の絵と同じデフォルメ（2頭身くらい・赤いポニーテールとオレンジの毛先・白いコック帽とコックコート・赤いエプロンの炎マーク・ほっぺのすす・やわらかいアニメ調の塗り）／1は片手を口のよこにあてて元気に呼びかける・もう片方の手でクッキーをかかげる／2はクッキーののったお盆を両手で持って、片足を上げていそいで運ぶ／体ぜんぶが入っている／字が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
Redraw this same girl as a cute super-deformed chibi mascot, about two heads tall, matching the chibi in the reference image in proportions, line and soft painterly anime style, keeping her face, red ponytail with orange tips, white chef hat, white chef coat, red apron with the flame mark and the soot smudge on her cheek. Pose: calling out cheerfully to customers, one hand cupped beside her open mouth, the other hand holding up a round cookie, leaning forward a little, bright happy eyes. Whole body visible, centered with margin around. No text. Flat solid green background (#00FF00).
```

2.
```
Redraw this same girl as a cute super-deformed chibi mascot, about two heads tall, matching the chibi in the reference image in proportions, line and soft painterly anime style, keeping her face, red ponytail with orange tips, white chef hat, white chef coat, red apron with the flame mark and the soot smudge on her cheek. Pose: hurrying with a small wooden tray of cookies held in both hands, one foot lifted mid-step, determined happy smile. Whole body visible, centered with margin around. No text. Flat solid green background (#00FF00).
```

## Claude のメモ
- 11/21 しょーくん「お昼を夜レベルに面白く」→ えらぶ質問で「営業中も少しさわれる」（呼びこみ・天板から補充）。昼の舞台の左下のチビキャラ（chibi-think・chibi-cheer・chibi-sit とならぶ）
- 取りこみ：`prep_art.py one … chibi-call 320`・`chibi-carry 320`

## Claude の確認（ここは依頼したチャットが書く）
- 11/21 合格（PR #212）。まぜまぜおかし屋の枝 hiru/puzzle に chibi-call・chibi-carry（one 320） として取りこんだ
