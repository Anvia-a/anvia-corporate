# antigravity → anvia-corporate 最終ファイル判定（実ファイル名ベース）

## 判定ルール
- **上書きOK**: そのままコピーして置換してよい
- **差分マージ**: 直接上書きせず、内容比較して統合
- **今回は触らない**: このフェーズでは変更しない
- **不要**: 現時点では取り込まない

---

## 1) app 配下

| antigravity 側 | anvia-corporate 側 対応先 | 判定 | 理由 |
|---|---|---|---|
| `app/page.tsx` | `app/page.tsx` | 上書きOK | トップページ本体は総入れ替え対象 |
| `app/cookie-policy/page.tsx` | `app/cookie-policy/page.tsx` | 上書きOK（なければ新規） | 法務ページは独立ルートで衝突リスク低 |
| `app/privacy-policy/page.tsx` | `app/privacy-policy/page.tsx` | 上書きOK（なければ新規） | 同上 |
| `app/terms-of-service/page.tsx` | `app/terms-of-service/page.tsx` | 上書きOK（なければ新規） | 同上 |
| `app/globals.css` | `app/globals.css` | 差分マージ | 全体スタイル影響が大きく、既存class参照との整合が必要 |
| `app/layout.tsx` | `app/layout.tsx` | 差分マージ | `lang`・metadata・全体ラッパーは基盤のため |

---

## 2) components 配下

> 結論: まず `components/antigravity/` に受けて、`app/page.tsx` から参照。安定後に既存整理。

| antigravity 側 | anvia-corporate 側 対応先（初回） | 判定 | 理由 |
|---|---|---|---|
| `components/AnimateOnScroll.tsx` | `components/antigravity/AnimateOnScroll.tsx` | 上書きOK（新規） | 新規受け先で衝突回避 |
| `components/Header.tsx` | `components/antigravity/Header.tsx` | 上書きOK（新規） | 同上 |
| `components/Header.module.css` | `components/antigravity/Header.module.css` | 上書きOK（新規） | 同上 |
| `components/Hero.tsx` | `components/antigravity/Hero.tsx` | 上書きOK（新規） | 同上 |
| `components/Hero.module.css` | `components/antigravity/Hero.module.css` | 上書きOK（新規） | 同上 |
| `components/OurVision.tsx` | `components/antigravity/OurVision.tsx` | 上書きOK（新規） | 同上 |
| `components/OurVision.module.css` | `components/antigravity/OurVision.module.css` | 上書きOK（新規） | 同上 |
| `components/MissionValues.tsx` | `components/antigravity/MissionValues.tsx` | 上書きOK（新規） | 同上 |
| `components/MissionValues.module.css` | `components/antigravity/MissionValues.module.css` | 上書きOK（新規） | 同上 |
| `components/Services.tsx` | `components/antigravity/Services.tsx` | 上書きOK（新規） | 同上 |
| `components/Services.module.css` | `components/antigravity/Services.module.css` | 上書きOK（新規） | 同上 |
| `components/Partnerships.tsx` | `components/antigravity/Partnerships.tsx` | 上書きOK（新規） | 同上 |
| `components/Partnerships.module.css` | `components/antigravity/Partnerships.module.css` | 上書きOK（新規） | 同上 |
| `components/Company.tsx` | `components/antigravity/Company.tsx` | 上書きOK（新規） | 同上 |
| `components/Company.module.css` | `components/antigravity/Company.module.css` | 上書きOK（新規） | 同上 |
| `components/Contact.tsx` | `components/antigravity/Contact.tsx` | 上書きOK（新規） | 同上 |
| `components/Contact.module.css` | `components/antigravity/Contact.module.css` | 上書きOK（新規） | 同上 |
| `components/Footer.tsx` | `components/antigravity/Footer.tsx` | 上書きOK（新規） | 同上 |
| `components/Footer.module.css` | `components/antigravity/Footer.module.css` | 上書きOK（新規） | 同上 |

### 既存 components の最終判定
- `components/home/HomePage.tsx`: **不要（最終的に削除候補）**
  - 理由: antigravity版 `app/page.tsx` に置換後、未参照になる見込み。

---

## 3) public 配下

- あなたの一覧ではファイル名が未提示のため、**判定は以下で最終確定**:
  1. `anvia-corporate/public` に存在しないファイル名 → **上書きOK（新規追加）**
  2. 同名ファイルが存在するもの → **差分マージ扱い（上書き前に比較）**
  3. antigravity内で未参照アセット → **不要**

> 先にファイル名を列挙しておけば、1ファイルごとに最終判定表へ追記できる。

---

## 4) ルートファイル

| antigravity 側 | anvia-corporate 側 対応先 | 判定 | 理由 |
|---|---|---|---|
| `package.json` | `package.json` | 差分マージ | scripts/依存を丸上書きすると壊れやすい |
| `next.config.js` | `next.config.mjs` | 差分マージ | 形式が異なるため設定値だけ統合 |
| `tsconfig.json` | `tsconfig.json` | 今回は触らない | まずは既存型設定維持で安全反映 |
| `tailwind.config.*`（今回一覧に無し） | （存在時のみ） | 今回は触らない | 実ファイルが未提示のため |

---

## 5) Windowsエクスプローラー最終作業手順（右クリック操作ベース）

前提:
- 反映元: `C:\work\antigravity`
- 反映先: `C:\work\anvia-corporate`

1. エクスプローラーを2つ開く。
2. 左ウィンドウで `C:\work\antigravity` を開く。
3. 右ウィンドウで `C:\work\anvia-corporate` を開く。

### A. app のコピー
4. 左で `app` を開く。
5. `page.tsx` を右クリック → コピー。
6. 右の `anvia-corporate\app` で右クリック → 貼り付け（上書き）。
7. 左の `cookie-policy` フォルダを右クリック → コピー。
8. 右の `anvia-corporate\app` で右クリック → 貼り付け。
9. 左の `privacy-policy` フォルダを右クリック → コピー。
10. 右の `anvia-corporate\app` で右クリック → 貼り付け。
11. 左の `terms-of-service` フォルダを右クリック → コピー。
12. 右の `anvia-corporate\app` で右クリック → 貼り付け。
13. 左の `globals.css` を右クリック → コピー。
14. 右の `anvia-corporate\app` で右クリック → 貼り付け後、名前を `globals.antigravity.css` に変更（比較用）。
15. 左の `layout.tsx` を右クリック → コピー。
16. 右の `anvia-corporate\app` で右クリック → 貼り付け後、名前を `layout.antigravity.tsx` に変更（比較用）。

### B. components のコピー
17. 右の `anvia-corporate\components` を開く。
18. 右側で空白右クリック → 新規作成 → フォルダー → `antigravity`。
19. 左の `antigravity\components` を開く。
20. ファイルを全選択（Ctrl+A）→ 右クリック → コピー。
21. 右の `anvia-corporate\components\antigravity` で右クリック → 貼り付け。

### C. public のコピー
22. 左の `antigravity\public` を開く。
23. ファイルを全選択（Ctrl+A）→ 右クリック → コピー。
24. 右の `anvia-corporate\public` を開く（無ければ作成）→ 右クリック → 貼り付け。
25. 上書き確認が出たら、いったん「スキップ」を選び、同名ファイルをメモ。

### D. ルート設定ファイルの比較用コピー
26. 左の `package.json` を右クリック → コピー。
27. 右の `anvia-corporate` で右クリック → 貼り付け後、`package.antigravity.json` にリネーム。
28. 左の `next.config.js` を右クリック → コピー。
29. 右の `anvia-corporate` で右クリック → 貼り付け後、`next.config.antigravity.js` にリネーム。

### E. 比較マージ（エディタ）
30. `app/globals.css` と `app/globals.antigravity.css` を比較し、`globals.css` に統合。
31. `app/layout.tsx` と `app/layout.antigravity.tsx` を比較し、`layout.tsx` に統合。
32. `package.json` と `package.antigravity.json` を比較し、`package.json` に統合。
33. `next.config.mjs` と `next.config.antigravity.js` を比較し、`next.config.mjs` に統合。
34. `app/page.tsx` が `components/antigravity/*` を参照するよう import を確認。

### F. 最終確認
35. 一時比較ファイル（`*.antigravity.*`）を削除。
36. ターミナルで `npm install`。
37. `npm run build`。
38. ビルド成功後、未使用になった `components/home/HomePage.tsx` を削除候補として最終判断。

