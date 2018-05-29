## 要件
```
** 共通ヘッダー
- 各ページにアクセスできる
- カートにアイテムが入っている場合は、()でカート内のアイテム数が表示される

* Home ページ
  - サイトのTOPページ
* About ページ
  - サイトの概要を紹介する
* cart ページ
  - Item
    - (商品ID)
    - 商品名
    - 価格
    - 個数
    - 個数増減ボタン
    - かごから削除ボタン
  - 合計アイテム数
  - 合計金額
* shop ページ
  - Item
    - (商品ID)
    - 商品名
    - 説明文
    - 価格
    - 残り在庫数
    - かごに入れるボタン
  - Item
  - Item
  - Item
```

## state
- `itemMaster` はすべての元となるデータで基本的に不変
- 在庫数は `itemMaster` の 各 `count` から割り当てられる

```javascript
{
  itemMaster: [
    {
      id: 1,
      name: '元気になる薬',
      sescription: '飲んだら24時間元気が続く薬です',
      price: 1000,
      count: 100
    },
    {
      id: 2,
      name: '落ち着く薬',
      sescription: '飲んだら24時間沈着冷静になれる薬です',
      price: 800,
      count: 50
    },
    {
      id: 3,
      name: '眠くなる薬',
      sescription: '飲んだら3秒で眠れる薬です',
      price: 3000,
      count: 80
    }
  ],
  cart: [
    {
      id: 1,
      ...
      count: 5
    }
  ],
  shop: [
    {
      id: 1,
      ...
      count: 3
    },
    {
      id: 2,
      ...
      count: 5
    }
  ]
}


```