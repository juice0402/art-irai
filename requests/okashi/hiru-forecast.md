# UI：あしたの予報のマーク（ふつうの日と、昼のできごと6つ）

状態：依頼中
依頼日：2026-11-21
依頼したチャット：【okashi-hiru】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（画風・塗り・あたたかい光）
大きさ：1536×1024
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/hiru-forecast.png`
ブランチ：`art/okashi-hiru-forecast`
点検：7つが上4つ・下3つのマスにはっきり分かれている／どれも同じくらいの大きさの丸っこいマーク（人はいない）／上の段 1 にこにこ顔のお日さま・2 小さな雨雲としずくと赤い小さな傘・3 赤い提灯2つと小さな太鼓（お祭り）・4 パステルの小さな妖精の羽と小さな三角の旗（遠足）／下の段 5 ピンクの花の咲いた茶色の小枝にとまる小鳥2羽・6 くるくる舞うオレンジと赤の落ち葉（風）・7 魔女のほうきと、キラキラの小さな手紙（口コミ）／緑や青の物がない（雨と雨雲も、うすい灰色とクリーム色で）／字が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
7 separate round cute icons with wide even spacing, four in the top row and three in the bottom row, all about the same size, matching the reference image in soft anime style with smooth painterly shading and warm lighting. No people. Top row from left: a smiling cheerful sun with a happy face; a small soft pale gray rain cloud with a few cream colored raindrops and a tiny red umbrella; two red paper festival lanterns with a small wooden drum; a pair of tiny pastel pink and lavender fairy wings next to a small triangular pennant flag. Bottom row: two tiny round birds perched on a brown twig with pink blossoms; a swirl of orange and red autumn leaves blown by the wind with little curly wind lines; a witch broom with a tiny sparkling envelope. Avoid green and blue in the items: use pale gray and cream for the cloud and rain. No text, no letters, no numbers. Flat solid green background (#00FF00).
```

## Claude のメモ
- 11/21 しょーくん「明日はイベントだから妖精がたくさんくる、みたいなお気に入り予想を立てて戦略が練れる」→ えらぶ質問で「あしたの予報」（1日のまとめの日記に、あしたの顔ぶれと人気の味のヒント）
- 使い道：あしたの予報の札（ui-forecast）と、朝のキッチンの上の小さな今日のマーク。1 ふつうの日（fc-hare）・2〜7 は昼のできごと DAY_EVENTS の rain・matsuri・ensoku・kotori・kaze・majo
- 取りこみ：`prep_art.py parts … fc-hare fc-rain fc-matsuri fc-ensoku fc-kotori fc-kaze fc-majo`（上限 160）
