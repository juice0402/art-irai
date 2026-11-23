# UI：夜の舞台の幕（左・右・上の飾り）

状態：済
依頼日：2026-11-23
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（画風・塗り・あたたかい光）
大きさ：1536×1024
背景：無地の緑 #00FF00（部品のまわりと部品のあいだも緑）
年齢区分：全年齢
保存先：`out/okashi/stage-curtain.png`
ブランチ：`art/okashi-stage-curtain`
点検：参考の絵と同じ画風／部品は3つで、はなれている（あいだに緑）：上の段に横長の上飾り1つ・下の段に たて長の幕の左半分と右半分が1つずつ／幕はラズベリー色〜こい赤のビロード・たての ひだがたっぷり・やわらかい光沢／幕の下のはしに金のふさ（フリンジ）／左半分は右がわ（まんなか）がまっすぐの合わせ目・右半分は左がわがまっすぐの合わせ目で、2つをくっつけると1まいの閉じた幕になる／上飾りは同じビロードの波形（スカラップ）で、上のふちに細い金のふち・下に小さな金のタッセル／人・建物・字・ロゴはない／お菓子屋さんの夜の舞台に合う あたたかい色

## 画像への指示（このまま使う）

1.
```
Three separate game UI parts of a cozy theater stage curtain, on a plain solid green background #00FF00, with clear green gaps between the parts, matching the reference image in soft anime style with smooth painterly shading and warm lighting, like a wooden sweets shop at night. Top row: one wide horizontal curtain valance (pelmet) spanning most of the width, made of raspberry red velvet in soft scalloped swags, with a thin polished gold trim along its top edge and small gold tassels hanging from the bottom of each swag. Bottom row: two tall rectangular curtain halves side by side with a green gap between them. The left half has a perfectly straight vertical right edge, and the right half has a perfectly straight vertical left edge, so that placed together they form one closed curtain. Both halves are rich raspberry to deep crimson velvet with many deep vertical folds and a gentle sheen, and a short golden fringe along the bottom edge. Front view, flat lighting from the front, no perspective. No people, no buildings, no text, no letters, no logos. Game UI asset, clean edges.
```

## Claude のメモ
- 使い道（リーダー）：夜の舞台の背景をかくす幕（11/23 しょーくん「舞台の幕が閉まってるみたいな、汎用性の高い背景隠し」「進んだら幕が開いて場面再開の演出にも使える」）。来店の会話とビルドえらびのあいだは閉じていて、「おもてなしだ！」で左右に開く。シェフとお客さんは幕の前に立つ
- 取りこみは prep_art.py の parts で stage-curtain-top・stage-curtain-l・stage-curtain-r（ゲームの battle-fx.js の curtainHTML がこの3つの名前を見る。3つそろうと CSS の仮の幕から絵にかわる）。幕は舞台の大きさにのばして使う（たてのひだなので、のびても目立たない）

## Claude の確認（ここは依頼したチャットが書く）
- 11/23 13時 合格（PR #340 の1回目）。prep_art.py parts（幅760）・slim 済で stage-curtain-top・-l・-r として取りこんだ（mazemaze-okashiya）
