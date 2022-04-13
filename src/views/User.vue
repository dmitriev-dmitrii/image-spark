<template>
  <div>
    <!-- <h1 class="">user {{ this.$route.params.login }}</h1> -->

    <figure>
      <img :src="user.avatar_url" :alt="user.login">
      <figcaption class="title" v-html="user.name ? user.name : user.login ">
      </figcaption>
    </figure>
    <ul>
      <li>repos: {{user.	public_repos}}</li>
      <li>created: {{user.created_at}}</li>
    </ul>
    <!-- https://api.github.com/users/hasherezade -->

  </div>
</template>

<script>
export default {
data : ()=>{
  return     		{ 
}
}}
</script>

<style lang="scss" >

</style>