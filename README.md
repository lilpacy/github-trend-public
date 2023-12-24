<!--
Copyright 2023 lilpacy

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->

# github-trend

## 開発手順

```sh
npm install
npx clasp login
# 編集
npm run deploy
# webuiから動作確認
```

gcpのプロジェクトを作成してcreds設定すればローカル実行もできるが  
aside(clasp)使うオーバーヘッドが大きくなってしまうのでwebuiから動作確認するようにする

## デプロイ

```sh
npm run deploy
# 必要ならwebuiからスケジュール設定
```

## 設計

```sh
$ tree -I 'node_modules'
.
├── dist
│   ├── appsscript.json
│   └── index.js # デプロイ対象
├── src
│   ├── adapters # インフラ層でgasの知識とか全部こっち
│   │   ├── entities
│   │   │   ├── embed.ts
│   │   │   └── repository.ts
│   │   ├── translate.ts
│   │   └── usecases
│   │       └── notify.ts
│   ├── domain # ドメインとロジックはこっち
│   │   ├── entities
│   │   │   ├── embed.ts
│   │   │   ├── language.ts
│   │   │   └── repository.ts
│   │   └── usecases
│   │       └── notify.ts
│   ├── index.ts # controllerに当たるメイン関数を配置
│   └── utils
│       └── array.ts
└── test
    └── index.test.ts
```

テンプレートメソッド必要ない場合は、インターフェースを  
テンプレートメソッド必要な場合は、抽象クラスをそれぞれdomain配下に配置

implementsは全部adaptersに対応するフォルダ作って置く

filter部分とかadapterじゃなくてdomainにもっとおいても良かったかも
