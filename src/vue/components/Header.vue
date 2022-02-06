<template>
  <div class="bl_header">
    <h2>{{ `サブタイトル${title}` }}</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '青藍!',
    };
  },
};
</script>
<style lang="scss" scoped>
.bl_header {
  h2 {
    color: #274a78;
  }
}
</style>
