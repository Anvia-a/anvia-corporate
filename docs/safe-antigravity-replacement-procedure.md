# antigravityソースを `anvia-corporate` へ安全に移植する手順

前提: 直接上書きはせず、**比較 → 必要ファイル抽出 → 段階反映**で進める。

## 0. 事前準備（絶対に先に実施）

1. `anvia-corporate` 側をクリーンな状態にする。
   - `git status` が空であることを確認。
2. 新しい作業ブランチを切る。
   - 例: `git switch -c chore/antigravity-import`。
3. antigravityの展開先を**別ディレクトリ**に置く（同一ツリーで直接混ぜない）。
   - 例: `/workspace/antigravity-export`。

## 1. まず「消してはいけない基盤ファイル」を固定

以下は原則キープ（必要に応じて差分確認してから更新）:

- `package.json`（scripts/依存差分を確認して採用）
- `tsconfig.json`
- `next-env.d.ts`
- `next.config.*`（`mjs/js/ts` 形式差異に注意）
- `.gitignore`
- `app/layout.tsx`（metadataや共通ラッパーがある場合）

> ポイント: `next.config` と `package.json` は「丸ごと上書き」より、差分マージが安全。

## 2. コピー対象ディレクトリごとの安全方針

あなたの想定対象:
- `app`
- `components`
- `public`
- `package.json`
- `tailwind.config`
- `next.config`

これを以下ルールで反映する:

### A. `app`
- まず `app/page.*` とトップページ配下のルートを優先反映。
- `app/layout.*` は即上書きしない。既存の `<html>/<body>` 設定・metadataを見て統合。
- `app/api/*` がある場合は既存APIと重複ルートを確認。

### B. `components`
- 先に `components/antigravity/*` のようなサブフォルダで受ける（初回のみ）。
- 動作確認後に既存 `components/*` を置換/削除。
- 旧 `components/home/*` は import 参照が切れてから削除。

### C. `public`
- 画像・フォント名の衝突を確認（同名ファイル上書き注意）。
- 未使用アセットは最終フェーズで削除。

### D. `package.json`
- scripts差分（`dev/build/start/lint`）を維持できる形でマージ。
- dependenciesは **union + バージョン整合** を取り、最後に `npm install`。

### E. `tailwind.config.*`
- Tailwind採用デザインなら追加。
- `content` のパスに `app/**/*`, `components/**/*` が含まれることを確認。
- `postcss.config.*` の有無もセットで確認。

### F. `next.config.*`
- 画像ドメイン、実験フラグ、headers/redirects だけ必要部分を取り込み。
- 既存設定を消し込まないように手マージ推奨。

## 3. 実際の反映フロー（推奨）

1. antigravity由来ファイルを一旦 `incoming/antigravity` にコピー（追跡用）。
2. 反映順序は次の通り:
   1) `public`
   2) `components`（隔離配置）
   3) `app/page.*` と関連ルート
   4) `tailwind/postcss`
   5) `package.json` / `next.config`
3. `npm install` 後に `npm run build` を実行。
4. 画面確認（Hero / Vision / Mission / Service / Company / Contact）。
5. 問題なければ旧トップ実装を削除（未使用コンポーネント整理）。

## 4. 衝突回避チェックリスト

- [ ] `next.config.*` が2つ存在していない（`mjs` と `js` の重複など）
- [ ] Tailwind導入時に `globals.css` の競合がない
- [ ] `app/layout.*` でフォント/metadataが壊れていない
- [ ] 未使用コンポーネントにimport参照が残っていない
- [ ] `public` の同名ファイル上書きを把握している
- [ ] `npm run build` が成功している

## 5. 仕上げ（push前）

1. `git diff --name-only` で変更ファイルを確認。
2. 大量削除がある場合は「削除理由」をコミットメッセージに明記。
3. スクリーンショットを取得して、見た目差分を保存。
4. 1コミットに詰め込みすぎず、
   - `feat: import antigravity top page`
   - `chore: remove legacy unused components`
   のように分ける。

---

## 最短の実務コマンド例（参考）

```bash
# 1) 作業ブランチ
 git switch -c chore/antigravity-import

# 2) 比較しながら同期（まず dry-run）
 rsync -avun /workspace/antigravity-export/app/ ./app/
 rsync -avun /workspace/antigravity-export/components/ ./components/
 rsync -avun /workspace/antigravity-export/public/ ./public/

# 3) 問題なければ反映
 rsync -avu /workspace/antigravity-export/app/ ./app/
 rsync -avu /workspace/antigravity-export/components/ ./components/
 rsync -avu /workspace/antigravity-export/public/ ./public/

# 4) 設定は手マージ（package/next/tailwind）
 npm install
 npm run build
```

`rsync --delete` は最終整理フェーズまで使わないこと（誤削除防止）。
