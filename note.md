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

# Vue2

## [Webpack5 を使った vue.js の環境構築と SFC の利用方法](https://reffect.co.jp/vue/webpack-vue-single-file-component#vuejs-2)

- {{message}}が表示されないように webpack.config.js に記述

```
 resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
```

- [Vue.js: マウントのしかた まとめ](https://qiita.com/kazutosato/items/60527d0876ef13ab96cf?utm_source=pocket_mylist)

- [Vue CLI の Hello World って難しくないですか。(Vue.js 初心者)](https://qiita.com/mosamosa/items/e67e9f2f8c2e89c3e27a)

- [Vue.js、テンプレートで書くか？描画関数で書くか？](https://qiita.com/seya/items/d2898b551342a53c4fbd)

## 書籍: Vue インスタンスを作る

- el: どの HTML 要素とつながるのか
- data: どんなデータがあるのか
- method: どんな処理を行うのか
- computed: どのデータを使って別の計算をするのか
- watch: どのデータを監視するのか

## (閑話休題)[Vue.js「コンポーネント」入門](https://qiita.com/kiyokiyo_kzsby/items/980c1dc45e00d2d3cbb4)

- コンポーネント間のデータ受け渡しからスタート ※その前に書籍 vue と CSS の実践をすること

## 書籍: 要素の属性をデータで指定する

- 【重要】ファイルネームのパスは絶対パスらしい

```
<template>
<img v-bind:src="fileName" alt="" />
</template>
<script>
data(){
  return{
    fileName: './src/images/horse640.jpg',
  }
}
</script>
```

- vue と pug について
  https://kic-yuuki.hatenablog.com/entry/2019/01/27/155050
  ~~軽く確認(深みに入らないようにする!!!)~~ =>軽く深みに入りそうだったのでやめておく

## Qiita [Vue.js: 複数のクラスをバインディングする場合どのような書き方があるか](https://qiita.com/FumioNonaka/items/08ab308cf1e931d4b2eb)

- 配列構文

```
<button type="button"
    :class="['btn', 'btn-outline-info', 'btn-sm', isActive ? 'active' : '']">
    button
</button>
```

?? isActive がよくわかっていないかも…
=> isActive 指定したアイテムがアクティブかどうか確認すること

?? [active とは](https://developer.mozilla.org/ja/docs/Web/CSS/:active)

◎◎ [フロントエンドエンジニア必読 vue.js の基礎](https://reffect.co.jp/vue/vue-js-basic)

◎◎ [Vue.js: 複数のクラスをバインディングする場合どのような書き方があるか](https://qiita.com/FumioNonaka/items/08ab308cf1e931d4b2eb)

- 2/4 について
  書籍では P.64 の FORM をデータとしてつなぐからスタートかも
