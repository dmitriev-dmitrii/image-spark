<template>
  <div>
    <app-spinner class="title" v-if="loading">Loading</app-spinner>
    <div v-else >
      <div class="user-data">
    <figure class="user-data__avatar">
      <img :src="user.avatar_url" :alt="user.login">
      <figcaption class="title" v-html="user.name ? user.name : user.login ">
      </figcaption>
    </figure>
    <ul class="user-data__info">
      <li>repos: {{user.	public_repos}}</li>
      <li>created: {{user.created_at | formatDate }}</li>
      <li>location: {{user.location }}</li>
      <li>followers: {{user.followers }}</li>
    </ul>
    </div>
  <details>
    <summary>
      full userData
    </summary>
    <p>
  
        {{user}}

    </p>
  </details>
  </div>
  </div>
</template>

<script>
import AppSpinner from "@/components/AppSpinner.vue";
export default {
components : {AppSpinner},
data:()=> {
  return {
        loading:true
  }
},
computed : {
    user: function () {
      return this.$store.state.user.userData
    },
},
created() {
  this.$store.dispatch('user/getUser', this.$route.params.login ).then(()=>{this.loading = false })
}
}
</script>

<style lang="scss" >
.user-data{
  display: flex;
  justify-content: space-between;
  gap :1em;
      flex-wrap: wrap;
 margin:1em 0;
  &__avatar {
    padding: 0;
    margin:0;
  }
  &__avatar > img {
    max-width: 15rem;
    border-radius: $borderRadius;

    display: block;
  }
  &__info {

  }
  &__info li{
    margin-bottom: .5em;
  }
}
details {
    border: 1px solid ;
    border-radius: $borderRadius;
    padding: .5em .5em 0;
    transition: all .3s linear;
    line-height: 1.5em;
}
details[open] {
    padding: .5em;
    border: 1px solid $mainAccentColor;
}

summary {
    font-weight: bold;
    margin: -.5em -.5em 0;
    padding: .5em;
}

details[open] summary {
    border: 1px solid $mainAccentColor;
    margin-bottom: .5em;
}

</style>