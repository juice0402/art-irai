# 夜市の行商人（ドワーフの女の子）の表情4つ：にっこり・おどろき・ウインク・こまり

状態：済
依頼日：2026-11-22
依頼したチャット：【okashi】
やり方：編集（元の絵を直す）
元の絵：`sources/okashi/dwarf.png`（どの段も、この元の絵から編集する。前の段の結果は使わない）
参考の絵：なし
大きさ：1024×1536
背景：無地の緑 #00FF00
年齢区分：全年齢
保存先：`out/okashi/dwarf-face.png`（各段は `out/okashi/dwarf-face_step1.png` 〜 `_step4.png`）
ブランチ：`art/okashi-dwarf-face`
点検：どの段も元の絵と同じ人（髪型・髪色・帽子・マント・服・ランタン・小物・画風・色）／全身・正面・立ち位置と大きさが元の絵と同じ（さしかえて使う）／1 にっこり（目を細めた満面の笑み）・2 おどろき（目を見開いて口をあけた、うれしいおどろき・片手を上げる）・3 ウインク（片目を閉じた笑顔・人さし指を立てる）・4 こまり（まゆを下げた こまり顔・ほおに手）／ランタンの光はそのまま／字なし

## 画像への指示（このまま使う）

1.
```
Keep the same girl, hair, hat, cloak, outfit, lantern, accessories, colors, art style, and the same full-body front-facing framing with her body the same size and position. Change only the expression: a big beaming smile with happily closed crescent eyes and rosy cheeks. Plain solid green background #00FF00. No text.
```

2.
```
Keep the same girl, hair, hat, cloak, outfit, lantern, accessories, colors, art style, and the same full-body front-facing framing with her body the same size and position. Change only the expression and a small gesture: joyfully surprised, eyes wide and sparkling, mouth open in an excited gasp, her free hand raised beside her face. Plain solid green background #00FF00. No text.
```

3.
```
Keep the same girl, hair, hat, cloak, outfit, lantern, accessories, colors, art style, and the same full-body front-facing framing with her body the same size and position. Change only the expression and a small gesture: a playful wink with one eye closed and a cheerful smile, her free hand raising one index finger. Plain solid green background #00FF00. No text.
```

4.
```
Keep the same girl, hair, hat, cloak, outfit, lantern, accessories, colors, art style, and the same full-body front-facing framing with her body the same size and position. Change only the expression and a small gesture: a troubled apologetic look, eyebrows drooping, a small awkward smile, her free hand touching her cheek. Plain solid green background #00FF00. No text.
```

## Claude のメモ
- 11/22 しょーくん「夜市めっちゃいいね！！」で dwarf を合格にした。会話の表情（TALKERS の dwarf）：1 にっこり＝dwarf-joy・2 おどろき＝dwarf-wow・3 ウインク＝dwarf-wink・4 こまり＝dwarf-komari
- 夜市のページでも、ひとことに合わせて顔を変える（大安売り＝おどろき・買った＝ウインク・お金がたりない／持てない＝こまり）
- 取りこみは prep_art.py の box で元の dwarf と同じ四角に（上限1520）

## Claude の確認（ここは依頼したチャットが書く）
- 11/22 22時 合格。dwarf-joy・dwarf-wow・dwarf-wink・dwarf-komari（box 131,7,802,1509＝dwarf と同じ四角）で取りこんだ
