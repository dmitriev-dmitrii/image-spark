<template>
  <div class="error">
    <h1 class="title">Error <br>{{ this.$route.params.error }} </h1>
    <router-link class="link" to="/">
      to home 
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

</style>