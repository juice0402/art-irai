# エフェクト：シェフがまとう霧（火・赤・冷気・若葉・パステル）と、火の粉・妖精の光・キラキラ

状態：済
依頼日：2026-11-22
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（画風・塗り・あたたかい光）
大きさ：1536×1024
背景：真っ黒 #000000（光る物なので）
年齢区分：全年齢
保存先：`out/okashi/fx-aura.png`
ブランチ：`art/okashi-fx-aura`
点検：8つがはっきり分かれている（横4×たて2・となりと重ならない）／上の段の4つと下の段の左は、たてに立ちのぼるやわらかい霧（下が広く、上にいくほど細い筋になって消える・まんなかに固い芯がない・人やキャラの形が入っていない）：左から オレンジと金の熱の霧・深い赤の霧・うすい水色と白の冷気の霧・やわらかい若葉色の霧／下の段：左 パステルのピンク・ミント・ラベンダーのオーロラのような霧・小さな火の粉1つ・妖精の光1つ（丸い光の玉に すける小さな羽が4まい・顔や体はない）・4つの先のキラキラ1つ／参考の絵と同じ塗り／字が入っていない／背景は真っ黒だけ

## 画像への指示（このまま使う）

1.
```
A game effect asset sheet on a flat solid pure black background (#000000), eight separate glowing items in a grid of four columns and two rows with wide even spacing, each centered in its own cell and not touching its neighbors, no text, no letters, no numbers. Style: soft anime painterly shading matching the reference image, gentle magical glow. Top row, items 1 to 4, and bottom row item 5 are tall plumes of soft drifting mist that rise upward, wide and gathered at the bottom, breaking into thin curling wisps that fade out toward the top, translucent and airy with no solid core, filling most of the height of their cells, with no people, no figures and no faces inside the mist. Item 1 (top left): warm orange and golden heat mist with faint flame-like wisps. Item 2: deep crimson and scarlet mist, intense like a burning fighting-spirit aura. Item 3: pale icy blue and white cold fog with a few tiny frost glints. Item 4 (top right): soft fresh spring-green fog with a few tiny pale yellow-green light motes. Bottom row: item 5 (bottom left): shimmering pastel pink, mint and lavender mist with soft aurora-like ribbons. Item 6: one tiny glowing ember spark, slightly teardrop shaped, bright yellow-white core with an orange glow. Item 7: one small glowing fairy light, a round soft white and pale green glowing orb with four small translucent dragonfly-like wings, no face and no body. Item 8 (bottom right): one four-pointed twinkle star sparkle, white with a soft pink and cyan glow. No shadows.
```

## Claude のメモ
- 11/22 しょーくん「オーラというか縁取りじゃなくて、周りを漂ってる霧みたいな感じ」「わかばも緑の霧に、妖精の光みたいなのを纏わせたら」「オーラや火の粉、氷なんかも使える素材がなければ描きおろしてね」。いまはコードの光と粒（style-battle.css の「キャラのまわりの空気」）
- 使い道：fx-aura-fire（ほのかの火力）・fx-aura-kone（こね生地の赤いオーラ）・fx-aura-cold（みなもの冷たさ）・fx-aura-leaf（わかば）・fx-aura-candy（キャンディのれんさ）＝シェフのうしろに立ちのぼらせ、足もとと腰にも小さく重ねて横にただよわせる／fx-ember（火の粉）・fx-fairy（わかばのまわりを飛ぶ妖精の光）・fx-twinkle（キャンディのキラキラ）。冷気の粒は前の fx-snow を使う
- 取りこむときは `python3 -I tools/glow_art.py <PNG> 4x2 <上限> fx-aura-fire fx-aura-kone fx-aura-cold fx-aura-leaf fx-aura-candy fx-ember fx-fairy fx-twinkle`（霧は 520・小さい3つは別に 160 で切りなおす）

## Claude の確認（ここは依頼したチャットが書く）
- 合格（11/22）。8つとも glow_art で切って取りこんだ（fx-aura-*・fx-ember・fx-fairy・fx-twinkle）
