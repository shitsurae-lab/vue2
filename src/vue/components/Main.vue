<template>
  <div>
    <p v-bind:style="{ fontWeigt: 900 }">
      インラインスタイルのCSSはキャメルケース
    </p>

    <!-- 【重要】Vue.js 複数のクラスをバインディング(https://qiita.com/FumioNonaka/items/08ab308cf1e931d4b2eb) -->
    <p :class="['p-font', 'p-weight', isActive ? 'active' : '']">
      配列構文に使った三項演算子.. isActiveって?
    </p>
    <p :class="[{ active: isActive } ? '' : 'noActive']">
      配列構文に使った三項演算子.. isActiveって?②
    </p>
  </div>
</template>
<script></script>
<style lang="scss" scoped></style>
