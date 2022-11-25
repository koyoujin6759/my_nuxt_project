<template lang="">
  <div class="error-page">
    <p>Here Is Error Page!</p>
    <button v-on:click="goHome">back home</button>
  </div>
</template>
<script>
export default {
  layout: "error",
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>
<style lang="scss" scoped>
.error-page {
  padding: 100px 0;

  p {
    font-size: 22px;
  }
}
</style>
