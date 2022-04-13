<template>
  <div>
    <search-form />
    <p class="title" v-if="users.length == 0">No Data</p>
    <div v-show="users.length != 0">
      <p class="title">
        Finded : {{ totalResults }} &nbsp; Loaded : {{ users.length }}
      </p>
      <transition-group name="users-list" class="users-list" tag="ul">
        <user-card v-for="user in users" :key="user.id+user.login" :user="user" />
        <li key="observer" id="observer" class="title" ref="observer">
          <app-spinner v-show="loading">Loading</app-spinner>
          <p  v-show="users.length == totalResults"> End of data </p>
        </li>
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
  data:() => {
    return {
      loading:false
    }
    
  },
  computed: {
    users: function () {
      return this.$store.state.users;
    },
    totalResults: function () {
      return this.$store.state.totalResults;
    },
    incompleteResults: function () {
      return this.$store.state.incompleteResults;
    },
  },
  methods: {},
  mounted() {
    const options = {
      rootMargin: "0px",
      threshold: 1.0,
      trackVisibility: true,
      delay: 100,
    };
    const callback = (entries, observer) => {
      // console.log(entries[0].isVisible && entries[0].isIntersecting);
      this.loading=true
      if (entries[0].isVisible && entries[0].isIntersecting) {
        this.$store.dispatch("getUsers").then(()=> {this.loading=false} )
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  },
};
</script>

<style lang="scss" >
.users-list {
  margin-top: 1em;
  padding-bottom: 2em;
}
.users-list-leave-active,
.users-list-leave-to {
  transition: all 0.3s ease;
  opacity: 0;
}

#observer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  height: 3em;

}
</style>