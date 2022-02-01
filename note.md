- render 覚書
  [vue-cli で見つけた rendar 関数](https://reffect.co.jp/vue/vue-js-render)

```JavaScript
const app = Vue.createApp({
  data() {
    return {
      message: 'Hello, World!',
    };
  },
  render() {
    return Vue.h('p', this.message);
  },
}).mount('#app');
```

- [【Vue 3 入門】 今日から始める本格的フロントエンド WEB 開発(コンポーネント編)](https://reffect.co.jp/vue/vue-js-components) の真偽値(Boolean を渡す場合からスタート)

## [今日から始める Vue.js 3 を学んで本格的な Web フロントエンド開発(基礎編)](https://reffect.co.jp/vue/beginner-vue#Vuejs)

- [関数の実行](https://reffect.co.jp/vue/beginner-vue#Binding) のあたりからスタート
- [Reactivity](https://reffect.co.jp/vue/beginner-vue#Reactivity) は重要

## [既存の Vue.js プロジェクトを Vue 3 へ移行したときに必要だった修正まとめ](https://qiita.com/laineus/items/d1f1f7972f521556a788)

### 重要だと思ったところ

- プラグインの注入: これまでは new Vue の前に Vue.use でプラグインを注入していましたが、今回は createApp で生成された app インスタンスに対して use でプラグインを注入します。

## [Data オプション](https://v3.ja.vuejs.org/guide/migration/data-option.html#%E6%A6%82%E8%A6%81)

- 3.x では、 data オプションは object を返す function 宣言のみ受け入れるよう標準化されました。(オブジェクト宣言はなくなる)

## [重要: JavaScript-オブジェクトの基本](https://developer.mozilla.org/ja/docs/Learn/JavaScript/Objects/Basics)
