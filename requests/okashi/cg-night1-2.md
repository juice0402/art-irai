# 一枚絵 cg-night1 の直し：ほのかの服の前後（うしろ向きなのに、エプロンの前が見えている）

状態：依頼中
依頼日：2026-11-21
依頼したチャット：【okashi-hiru】
やり方：編集（元の絵を直す）
元の絵：`sources/okashi/cg-night1-src.png`（cg-story1 の2まいめ）
参考の絵：`sources/okashi/honoka.png`（ほのかの服：白いコック上着・炎の印のポケットつき赤いエプロン。エプロンのひもはうしろで大きなちょう結び）
大きさ：元の絵と同じ
背景：絵ぜんぶ（一枚絵なので緑にしない）
年齢区分：全年齢
保存先：`out/okashi/cg-night1-2.png`（各段は `out/okashi/cg-night1-2_step1.png`・`_step2.png`）
ブランチ：`art/okashi-cg-night1-2`
点検：ほのかの体はうしろ向きのまま（顔だけ肩ごしにふり返る）／見えている服がせなか側になっている：コック上着のせなかにボタンがない・赤いエプロンは腰のうしろで大きなちょう結び・エプロンのポケットと炎の印は見えない（前にあるので）／顔・髪・コック帽・クッキーの天板・窓のスライム・厨房・光は元の絵のまま／手と指のくずれがない／字が入っていない

## 画像への指示（このまま使う）

1.
```
Edit the original image. Fix only the red-haired girl's clothes: her body is turned away from the viewer and she looks back over her shoulder, so we must see the BACK of her uniform. The back of her white chef coat is plain with no buttons. Her red apron is tied behind her waist with a big red bow at the center of her lower back, and the front of the apron (its pocket and the small flame mark) is not visible from this angle. Keep everything else exactly the same: her face, expression, hair, chef hat, the tray of cookies in her hands, the blue slime peeking in through the window, the kitchen and the lighting. No text, no letters anywhere.
```

2.
```
Edit the original image. Turn only the red-haired girl so that her body faces the viewer in a three-quarter front view as she turns around in surprise, holding the tray of cookies, with her face toward the slime at the window. Now we see the FRONT of her uniform: the white chef coat with its double row of buttons, and the red apron with its pocket and small flame mark on the front; the apron strings are tied behind her back. Keep everything else exactly the same: her face, expression, hair, chef hat, the tray of cookies, the blue slime peeking in through the window, the kitchen and the lighting. No text, no letters anywhere.
```

## Claude のメモ
- 11/21 しょーくん「ほのかのユニフォームが前後逆」。体はうしろ向きなのに、エプロンの前（ポケット・炎の印）とコートのボタンがこちらを向いている
- 1＝うしろ向きのまま服をせなか側に／2＝体をこちらに向けて服の前を見せる。点検で合うほうをえらぶ
- 文は絵に合わせて「窓をたたく音・窓からのぞく」に直した（mazemaze-okashiya の PR #33）
- 取りこみ：16:9 のまま cg-night1（960×540）に入れかえ

## Claude の確認（ここは依頼したチャットが書く）
- まだ
