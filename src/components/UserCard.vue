<template>
  <li class="user-card__wrapper">
    <router-link :to="`/${user.login}`" class="user-card" :title="`go to ${user.login}`">
        <img
          class="user-card__avatar"
          :src="user.avatar_url"
          :alt="user.login"
        />
        <h3 class="user-card__login ">{{ user.login }}</h3>
        <p class="user-card__repos"><abbr title="repository count ">repos:</abbr> <span class="user-card__repos-value">&nbsp;222</span></p>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
    },
  },
};
</script>
<style lang="scss">
.user-card {
  &__wrapper {
    margin: 0.25em;
  }


  display: flex;
      justify-content: space-between;
  align-items: center;
flex-direction: column;
  gap: 1em;
  padding: 0.5em;
  border: 1px solid currentColor;
  border-radius: $borderRadius;

  @media (min-width: 413.98px){
flex-direction: row;
    }

  &:hover,
  &:focus {
    border: 1px solid $mainAccentColor;
  }
  &__avatar {
    display: inline-block;
    border-radius: 50%;
    height: 4em;
    width: 4em;
  }
  &__login {
    text-transform: capitalize;
  }
  &__repos abbr{
    font-weight: bold;
  }

}
</style>