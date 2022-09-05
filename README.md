# atcoder-typescript

[AtCoder](https://atcoder.jp/) の問題を TypeScript で解いているリポジトリです :+1:

## :beginner: How to solve?

- 解きたいコンテスト・問題に合わせて ディレクトリ・ファイルを作りましょう
  - 例: `src/abc260/a.ts`
- コンテストの問題を解きましょう
  - 基本的な入力の書き方（一例）は `lib/template.ts` に用意しています

## :beginner: How to debug?

:warning: VSCode でリポジトリを開いている前提:

- ファイルを開いた状態で `F5` を押すとデバッグ実行できます
- デバッグ実行時には、`stdin.txt` が標準入力として利用されるので任意の値に書き換えてください

## :beginner: How to test?

:warning: VSCode でリポジトリを開いている前提:

- [oj](https://github.com/online-judge-tools/oj/blob/master/docs/getting-started.ja.md) という Python パッケージを利用することで、自動的に AtCoder ページからサンプルケースを取得して検証することができます
  - `oj` のインストールは [How to Install `oj` command](https://github.com/online-judge-tools/oj/blob/master/docs/INSTALL.ja.md) を見てください
- `oj` がインストールされた状態で `Shift + command + B` を押すと自動テストを実行できます
