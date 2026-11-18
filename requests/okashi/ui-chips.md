# UI：計算の札4色＋焦げの札・発動のメダルのふち

状態：待ち（前の依頼が済んだら、【okashi】が依頼中にする）
依頼日：2026-11-18
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（画風・塗り・あたたかい光）・`sources/okashi/ui-now.png`（いまのゲームの画面。色と形のめやす。字はまねない）
大きさ：1536×1024
背景：無地の緑 #00FF00（メダルのふちの内側の抜く所も緑）
年齢区分：全年齢
保存先：`out/okashi/ui-chips.png`
ブランチ：`art/okashi-ui-chips`
点検：参考の絵と同じ画風／2段に分かれている／1段目：同じ形の横長の札が4つ（左から クリーム色がかった金・あたたかいオレンジ・いちごのピンク・ミントの緑）・どれも横幅が高さの4倍くらい・つやのあるキャンディのような面・細い真ちゅうのふち・左右のはしは丸く、まんなかは無地（字をのせて横にのばす）／2段目：左に 丸いメダルのふち（真ちゅうの輪・小さなお菓子の飾りが4つ・内側は緑で抜ける）・右に 同じ形の札のこげ茶（チョコレート色）／字・数字・記号が入っていない／背景は無地の緑だけ

## 画像への指示（このまま使う）

1.
```
A game UI asset sheet on a flat solid green background (#00FF00), items in two rows with wide even spacing, front view, no text, no letters, no numbers, no symbols. Style: cozy sweets shop, soft anime painterly shading matching the first reference image, warm lighting. Row 1: four separate tag plates of exactly the same shape side by side, each a horizontal rounded capsule about four times wider than tall, a glossy hard-candy surface with a soft top highlight and a thin polished brass rim, rounded ends, the middle area plain and even so it can be stretched sideways; colors from left to right: creamy golden yellow, warm ember orange, strawberry pink, fresh mint green. Row 2: on the left, a round brass medallion frame ring with four tiny sweets ornaments (a cookie, a strawberry, a candy, a macaron) evenly placed on the ring, the inside of the ring empty and filled with the same flat green background; on the right, one more tag plate of the same capsule shape in rich chocolate brown. No shadows on the background.
```

## Claude のメモ
- 11/18 16時 しょーくん「計算のふだも立派な演出だから、ちゃんと描き下ろしてをして、世界観に馴染ませてね」。夜の発動で、計算の札（×3 焼き加減・+30 となり・×2 次の主役）が舞台へ飛び、数字にすいこまれる（battle-fx.js の 5・.fchip）。メダルは発動したカードの絵を入れる丸（.fh-ico）
- 色の役目：金＝味パワー・スタート・アンカー・こね／オレンジ＝焼き加減・火力・サイコー／ピンク＝次の主役／ミント＝となり・ぜんぶへ・もう1回／こげ茶＝焦げ
- 札は 9分割（左右のはしを角・まんなかをのばす）。取りこむときは `prep_art.py parts … ui-chip-gold ui-chip-ember ui-chip-pink ui-chip-mint ui-medal-ring ui-chip-koge`（上の段から左→右）

## Claude の確認（ここは依頼したチャットが書く）
- まだ
