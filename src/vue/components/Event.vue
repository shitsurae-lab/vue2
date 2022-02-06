<template>
  <div>
    <p>{{ count }}</p>
    <button v-on:click="countUp">1増やす</button>
  </div>
</template>
<script>
export default {
  el: '#app',
  data: {
    count: 0,
  },
  methods: {
    countUp: () => {
      this.count++;
    },
  },
};
</script>
