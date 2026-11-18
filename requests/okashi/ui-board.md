# UI：調理台・おなかの帯・マス・コイン・火力のメーター・値札

状態：待ち（前の依頼が済んだら、【okashi】が依頼中にする）
依頼日：2026-11-18
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（画風・塗り・あたたかい光）・`sources/okashi/ui-now.png`（いまのゲームの画面。色と形のめやす。字はまねない）
大きさ：1536×1024
背景：無地の緑 #00FF00（枠の内側の抜く所も緑）
年齢区分：全年齢
保存先：`out/okashi/ui-board.png`
ブランチ：`art/okashi-ui-board`
点検：参考の絵と同じ画風／4段に分かれている／1段目：とても横長（横が高さの約6倍）の鉄板の調理台（こげ茶の木のふち・真ちゅうの角）・面は無地／2段目：とても細長い帯のわく（真ちゅうの管・中は暗い溝）／3段目：カードの形（横5:たて7）のくぼんだ空きマス・同じ大きさの鉄のふちのマス（下に小さな炎の彫り）・金のコイン（泡立て器の模様）／4段目：4つの小さな空のマスが並ぶメーター・クリーム色の値札・ミント色の小さなリボン／字・数字が入っていない

## 画像への指示（このまま使う）

1.
```
A game UI asset sheet on a flat solid green background (#00FF00), items in four horizontal rows with wide even spacing, front view, no text, no letters, no numbers. Style: cozy wooden sweets shop kitchen, dark polished wood, black cast iron and thin brass trim. Soft anime painterly shading matching the first reference image, warm lighting. Row 1: one very wide cooking counter tray about six times wider than tall, a dark cast iron griddle surface with a faint warm glow, set in a dark wood rim with brass corners; the surface is plain and even. Row 2: one very long thin meter frame about twelve times wider than tall, a brass tube with a dark empty inner groove and rounded brass end caps. Row 3: from left to right, an empty card slot shaped like a recessed rounded rectangle about five wide by seven tall carved into dark wood with a soft inner shadow, a second card slot of the same size with a cast iron rim and a tiny flame engraving at the bottom, and a round shiny gold coin with a simple embossed whisk. Row 4: from left to right, a short meter frame of four small empty brass cells in a row, a small cream price tag with a brass eyelet, and a small mint green ribbon label. All faces are blank. No shadows on the background.
```

## Claude のメモ
- 1＝調理台（.tiles）／2＝おなかの帯（.quota）／3＝空きマス（.tslot）・場のマス（.fslot）・コイン／4＝火力のメーター（.heat-bar）・値札（.sh-price）・まぜの札（.mixmark）

## Claude の確認（ここは依頼したチャットが書く）
- まだ
