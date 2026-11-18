# UI：ボタンの押した形と使えない形（ui-buttons の絵を編集・2段）

状態：済
依頼日：2026-11-18
依頼したチャット：【okashi】
やり方：編集（元の絵を直す）
元の絵：`sources/okashi/ui-buttons.png`
参考の絵：なし
大きさ：1536×1024
背景：無地の緑 #00FF00（枠の内側の抜く所も緑）
年齢区分：全年齢
保存先：`out/okashi/ui-buttons2.png`（各段は `out/okashi/ui-buttons2_step1.png` 〜 `_step2.png`）
ブランチ：`art/okashi-ui-buttons2`
点検：どちらの段も元の絵と同じ7つの部品・同じ位置・同じ大きさ・同じ形（並びを変えない・足さない・へらさない）／1 押した形：どの部品も少し暗く・面の光沢が弱く・上のふちの内側に浅い影（へこんだ感じ）／2 使えない形：どの部品も面と飾りがうすくくすんだ灰色がかったベージュ・光沢なし・真ちゅうのふちもくすむ／字・記号が入っていない／背景は無地の緑

## 画像への指示（このまま使う）

1.
```
Edit this image: make every button look pressed down. Keep exactly the same seven items, the same positions, the same sizes and the same shapes, and keep the flat solid green background (#00FF00). Make each button face slightly darker with a weaker highlight and a soft shallow inner shadow along the top edge, as if it is pushed in. Keep the brass rims and the small sweets ornaments, only slightly darker. No text, no letters, no icons.
```

2.
```
Edit this image: make every button look disabled. Keep exactly the same seven items, the same positions, the same sizes and the same shapes, and keep the flat solid green background (#00FF00). Make each button face and its ornaments muted and desaturated toward a soft grayish beige, with no glossy highlight, and make the brass rims dull. No text, no letters, no icons.
```

## Claude のメモ
- 全画面のボタンの押したとき（:active）と使えないとき（disabled）。11/18 司令塔「押したとき・使えないときの形がいる部品は、同じ1まいに並べて描かせる」→ もとの ui-buttons の絵をそのまま編集して、並びと形を同じにする（同じ切り方 prep_art.py parts で7つずつ。名前は ui-<部品>-down・ui-<部品>-off）
- えらんだタブのリボンは ui-tab-bow に切りわけ済み（押した形・使えない形のタブのリボンは使わない）

## Claude の確認（ここは依頼したチャットが書く）
- 合格（11/18）。prep_art.py parts で7つずつ切って ui-<部品>-down・-off として取りこんだ（tab-on の2つはリボンを消した）。:active と disabled に使う
