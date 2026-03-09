# Windows手作業向け: antigravity反映チェックリスト

このドキュメントは、`anvia-corporate` に対して antigravity 生成ソースを**安全に選択コピー**するための実作業手順です。

## 1. anvia-corporate 側で現時点で触るべき対象ファイル一覧

- `app/page.tsx`
- `app/globals.css`
- `app/layout.tsx`
- `components/**`（トップページで使用するもの）
- `public/**`（トップページで参照するアセット）
- `package.json`
- `next.config.mjs`（※ antigravity側の `next.config.*` をここへ統合）
- `tailwind.config.*`（存在する場合のみ新規追加）
- `postcss.config.*`（Tailwind同梱時にセット確認）

## 2. antigravity 側からコピー候補となるファイル一覧

想定元: `antigravity` プロジェクト

- `app/page.tsx`（または `app/(...)/page.tsx`）
- `app/globals.css`
- `app/layout.tsx`
- `components/**`
- `public/**`
- `package.json`
- `next.config.js|mjs|ts`
- `tailwind.config.js|ts`
- `postcss.config.js|mjs`

## 3. そのまま上書きしてよいもの（原則）

- `app/page.tsx`（トップページ総入れ替えの主対象）
- `components` 配下の**新規ファイル**（既存同名なし）
- `public` 配下の**新規アセット**（既存同名なし）

> 同名がある場合は上書き前に比較に切り替える。

## 4. 比較して差分マージすべきもの（重要）

- `app/layout.tsx`
  - `lang`, metadata, 共通 wrapper を維持したまま antigravity側差分を取り込む。
- `app/globals.css`
  - 既存ベースリセットと antigravityスタイルの重複を整理。
- `components` 配下の同名ファイル
  - import先とエクスポート名の互換を確認して置換。
- `public` 配下の同名アセット
  - 上書きで参照崩れないか確認。
- `package.json`
  - `scripts` と dependencies を手マージ。
- `next.config.*`
  - 既存は `next.config.mjs`。antigravity側が `js/ts` でも設定内容だけ統合。
- `tailwind.config.*`
  - `content` パス、テーマ拡張、plugins を既存構成と整合。

## 5. 今回は触らないもの

- `tsconfig.json`（型設定を意図的に変更しない限り据え置き）
- `next-env.d.ts`（自動生成ファイル）
- `.git` / `.next` / `node_modules`
- 旧docs（`docs/*.md`）

---

## 指定対象ごとの具体方針

### `app/page.tsx`
- **方針**: antigravity版で上書きしてOK。
- **理由**: トップページは実質総入れ替え対象。

### `app/globals.css`
- **方針**: まず比較、必要なら antigravity版をベースに再構成。
- **理由**: 全体波及が大きく、既存 class 参照切れが出やすい。

### `app/layout.tsx`
- **方針**: 直接上書きしない。差分マージ。
- **理由**: metadata / html lang / body ラッパーは基盤。

### `components` 配下
- **方針**: `components/antigravity/*` で一度受けてから参照を切替。
- **理由**: 既存コンポーネントと衝突回避。

### `public` 配下
- **方針**: 新規はコピー、同名は比較。
- **理由**: 画像・フォントの同名上書き事故防止。

### `package.json`
- **方針**: 手マージ必須。
- **理由**: scripts/依存を丸ごと上書きすると実行系が壊れやすい。

### `next.config`
- **方針**: `next.config.mjs` を維持し、設定値だけ統合。
- **理由**: 現リポジトリ形式と齟齬を避ける。

### `tailwind.config`
- **方針**: antigravityがTailwind利用時のみ追加。
- **理由**: 非利用なら不要。利用時は `postcss` とセットで反映。

---

## Windowsエクスプローラー作業手順（1操作ずつ）

前提フォルダ例:
- 反映先: `C:\work\anvia-corporate`
- 反映元: `C:\work\antigravity-export`

1. エクスプローラーを2つ開く。
2. 1つ目で `C:\work\anvia-corporate` を開く。
3. 2つ目で `C:\work\antigravity-export` を開く。
4. `anvia-corporate` 側で `app` フォルダを開く。
5. `antigravity-export\app` フォルダを開く。
6. `antigravity-export\app\page.tsx` をコピーして `anvia-corporate\app\` に貼り付け（上書き）。
7. `antigravity-export\app\globals.css` は**いったん別名**で `anvia-corporate\app\globals.antigravity.css` として貼り付け。
8. `antigravity-export\app\layout.tsx` も同様に `anvia-corporate\app\layout.antigravity.tsx` として貼り付け。
9. `anvia-corporate` 側で `components` フォルダを開く。
10. `anvia-corporate\components\antigravity` フォルダを新規作成。
11. `antigravity-export\components` の中身を `anvia-corporate\components\antigravity` にコピー。
12. `anvia-corporate` 側で `public` フォルダを開く（なければ作成）。
13. `antigravity-export\public` の中身を `anvia-corporate\public` へコピー。
14. 同名ファイルの上書き確認が出たら「キャンセル」を選び、該当ファイル名をメモ（比較対象にする）。
15. `antigravity-export\package.json` を `anvia-corporate` 直下へ `package.antigravity.json` としてコピー。
16. `antigravity-export\next.config.*` を `anvia-corporate` 直下へ `next.config.antigravity.*` としてコピー。
17. `antigravity-export\tailwind.config.*` があれば `anvia-corporate` 直下へコピー。
18. `antigravity-export\postcss.config.*` があれば `anvia-corporate` 直下へコピー。
19. エディタで `globals.css` と `globals.antigravity.css` を比較し、`globals.css` に反映。
20. エディタで `layout.tsx` と `layout.antigravity.tsx` を比較し、`layout.tsx` に反映。
21. `package.json` と `package.antigravity.json` を比較し、`package.json` を手マージ。
22. `next.config.mjs` と `next.config.antigravity.*` を比較し、`next.config.mjs` に手マージ。
23. `app/page.tsx` の import 先を `components/antigravity/...` に一時接続。
24. ターミナルで `npm install` を実行。
25. `npm run build` を実行。
26. ビルド成功後、`*.antigravity.*` の一時比較ファイルを削除。
27. 最後に不要になった旧 `components/home/*` を削除候補として整理。

