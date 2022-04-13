<template>
  <div>
    <search-form />
    <p class="title" v-if="users.length == 0">No Data</p>
  <div v-else>
    <p class="title" >Finded : {{ totalResults }} &nbsp; Loaded : {{ users.length }}</p>
    <transition-group name="users-list" class="users-list" tag="ul">
      <user-card v-for="user in users" :key="user.id" :user="user" />
      <li key="observer" id="observer" ><app-spinner>Загрузка</app-spinner></li>
    </transition-group>
</div>
  </div>
</template>

<script>

import SearchForm from "@/components/SearchForm";
import UserCard from "@/components/UserCard.vue";
import AppSpinner from "@/components/AppSpinner.vue";

export default {
  components: { SearchForm, UserCard, AppSpinner },

  computed: {
    users : function () { return this.$store.state.users },
    totalResults : function () { return this.$store.state.totalResults },
    incompleteResults : function () { return this.$store.state.incompleteResults },
  },
};
</script>

<style lang="scss" >
.users-list {
margin-top: 1em;
}
.users-list-leave-active ,
.users-list-leave-to
{
  transition: all .3s ease;
  opacity: 0;
}

#observer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
}
</style>