# Contribution Guide

## 課題

課題は[Jira](https://mabell.atlassian.net/jira/software/projects/MBL/boards/6)で管理しています。


## ブランチルール
- 基本的には、git-flowに従います。
- 課題ごとにfeatureブランチを切ってください。
- featureブランチの命名はケバブケースを用い、Jiraの課題キーを紐付けてください。  
例)
  ```
  feature/MBL-XX/add-hoge-component
  ```
- コミットメッセージにはいずれかのPrefixをつけてください。  
例)
  ```
  fix: ほげふがの動作を修正
  ```

### Prefix一覧

| prefix | 説明 |
| :--: | :-- |
| fix | バグの修正 |
| feat | 新しい機能, 新しいファイルの追加, 仕様変更に伴う機能変更 |
| docs | README.mdやCONTRIBUTNG.mdなどのドキュメントの変更 |
| refactor | アプリの動作に影響しないコードの修正 |
| | パフォーマンスや可読性を向上させる修正 |
| | スペースやインデントの調整 |
| test | テストに関する内容 |
| chore | その他, コンフリクト解消等の雑用 |


## 作業手順

1. MainブランチからFeatureブランチを作る (リリース前のため)
    ```
    git checkout -b feature/MBL-XX/add-hoge-component origin/main
    ```
1. 新規ブランチをPushする (リモートブランチを作成するとJiraの課題が**進行中**へ移動します)
    ```
    git push -u origin feature/MBL-XX/add-hoge-component
    ```
1. コードを変更する
1. 変更をコミットする
    ```
    git add .
    git commit -m 'add: ホゲホゲフォームを追加'
    ```
1. 変更をPushする
    ```
    git push
    ```
1. Pull Requestを作成する

## 動作確認手順

動作確認手順については、[README.mdのGetting Started](https://github.com/mabell-makeup/frontend#getting-started)を参照してください。

## テスト

以下のコマンドで、ユニットテスト及びスナップショットテストが実行できます。
```
npm run test
```
