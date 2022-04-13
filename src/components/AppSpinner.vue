<template>
  <div class="my-spiner__wrapper">
    <div class="my-spiner"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.my-spiner {
  &__wrapper {
  display: flex;
  align-items: center;
  }
  background-color: transparent;
  height: 2rem;
  width: 2rem;
  margin: .5em;
  display: inline-block;
  border-radius: 50%;
  border:2px solid $bgColor2;
  border-top:2px solid $mainAccentColor;
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