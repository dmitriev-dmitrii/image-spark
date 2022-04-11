<template>
  <div>

  <search-form/>
<abbr>Текст</abbr>
    <app-spinner >Загрузка</app-spinner>

    <p class="title" v-if="usersList.length == 0 ">Список пуст</p>
  <p class="title">length : {{usersList.length}}</p>
    <transition-group name="" class="" tag="ul" >
      <user-card v-for="user in usersList" :key="user.id" :user="user" />
    </transition-group>

  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SearchForm from "@/components/SearchForm.vue";
import UserCard from "@/components/UserCard.vue";
import AppSpinner from "@/components/AppSpinner.vue";

export default {
  components: { SearchForm, UserCard, AppSpinner },

  computed: {
    ...mapGetters({ usersList: "sortedUsersList" }),
  },
};
</script>

<style lang="scss" >
</style>