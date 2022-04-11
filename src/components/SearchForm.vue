
<template>
  <form class="" @submit.prevent="sendSearchReqest">

    <input
      v-model="searchInputValue"
      type="search"
      class=""
    />

    <button type="reset">Очистить</button>
    <button type="submit">Поиск</button>

  </form>
</template>

<script>

import AppSpinner from "@/components/AppSpinner";

export default {
  components: { AppSpinner },

  data: () => {
    return {
      searchInputValue: "dmitrii",
    };
  },

  methods: {
    sendSearchReqest: function () {
      this.$store.dispatch('sendSerachRequest',this.searchInputValue )
    },

  },
};
</script>

<style>
</style>