# UI：鉄板の炎（3つの形・光るので黒い背景）

状態：依頼中
依頼日：2026-11-18
依頼したチャット：【okashi】
やり方：新しく描く
元の絵：なし
参考の絵：`sources/okashi/cards1.png`（画風・塗り）
大きさ：1536×1024
背景：無地の黒 #000000（光るものなので黒。透明にしなくてよい）
年齢区分：全年齢
保存先：`out/okashi/ui-flame.png`
ブランチ：`art/okashi-ui-flame`
点検：炎が3つ、左から 細くて背の高い炎・まるくて中くらいの炎・横に広く燃えさかる炎（いくつもの舌）／まんなかは明るいクリーム色〜黄色、ふちはオレンジと赤／やわらかく光る／煙・まき・なべは入っていない／それぞれが横に3等分した場所のまんなかにあり、重なっていない／字が入っていない／背景は無地の黒だけ

## 画像への指示（このまま使う）

1.
```
Three separate stylized cooking fire flames on a flat solid black background (#000000), side by side with wide even spacing, matching the reference image's soft anime painterly style. Left: one tall slender flame tongue with a bright pale yellow core fading to orange and red at the tips. Center: one medium rounded flame with a soft white-yellow core and orange edges. Right: one wide roaring flame burst with several tongues, hot orange and red. Glowing soft edges, each flame centered in its own third of the image, no smoke, no wood, no pan, no people, no text.
```

## Claude のメモ
- 11/18 しょーくん「火力の炎…も全て描き下ろして」。調理台の鉄板の炎（.tf・火力で大きさが変わる）と、大技の画面いっぱいの炎に使う。ゆらすのはコード（transform と opacity）
- 黒い背景のまま取りこみ、CSS の mix-blend-mode: screen で重ねる（緑を抜くと光のふちが緑になるため）→ ui-flame-tall・ui-flame-mid・ui-flame-wide

## Claude の確認（ここは依頼したチャットが書く）
- まだ
