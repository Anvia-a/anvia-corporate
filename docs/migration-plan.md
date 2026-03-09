# anvia-corporate リニューアル整理プラン

## 1) 現在の主要ファイル構成

- `app/layout.tsx`: App Router のルートレイアウト。
- `app/page.tsx`: トップページ本体（現状は1ファイルにロジックとUIが集中）。
- `app/globals.css`: 全体スタイル。
- `package.json`: 依存関係・スクリプト。
- `tsconfig.json`, `next-env.d.ts`, `next.config.mjs`: Next.js/TypeScriptの基盤設定。

## 2) 残すべきファイル（基盤）

- `package.json`
- `tsconfig.json`
- `next.config.mjs`
- `next-env.d.ts`
- `app/layout.tsx`
- `app/globals.css`（全面刷新してもファイル自体は維持）

## 3) 削除候補ファイル

- 旧デザイン由来で今後参照しないセクション実装（`app/page.tsx` の中身は置換対象）。
- 将来追加される未使用コンポーネント（`components/` 配下で import されないもの）。
- 一時検証コードやスクラップ用ファイル（今回は新規追加なし）。

> 注: 設定ファイルはビルド基盤のため削除しない。

## 4) antigravity から移植すべき想定ファイル

antigravity の実体フォルダが現リポジトリ内に無いため、移植対象は「責務単位」で先に定義する。

- ルートページ構成（Hero / Philosophy / What we do / Work with us / Contact）
- セクション用共通コンポーネント
- スクロール時の表示演出やヒーロー演出ロジック
- 新デザイン固有の文言・導線（CTA）
- 必要最小限のグローバルスタイル

## 5) 安全な入れ替え手順

1. **現行凍結**: 既存ページを分析し、基盤ファイルを固定。
2. **責務分離**: `app/page.tsx` の巨大実装を `components/home/*` に分割。
3. **段階移植**: antigravity 相当のデザイン要素をセクション単位で反映。
4. **不要整理**: import されないファイル・不要スタイルを削除。
5. **検証**: `npm run lint` / `npm run build` で確認。
6. **最終確認**: 表示確認（スクリーンショット）後にコミット。
