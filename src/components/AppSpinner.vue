<template>
  <div>
    <div class="my-spiner"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.my-spiner {
  background-color: transparent;
  height: 2rem;
  width: 2rem;
  display: inline-block;
  border-radius: 50%;
  border: 0.1em solid rgba(0, 220, 128, 0.1);
  border-top: 0.1em solid $mainAccentColor;
  animation: spiner 1.2s linear infinite;
}
@keyframes spiner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>