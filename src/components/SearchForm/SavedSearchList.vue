
<template>
<div>
<p>Yours last 7 succes searches : </p>

<ul @click.prevent="restoreSearch" name="saved-seacrh"  tag="ul">
  <li v-for="(item, index) in savedSearches" :data-saved-state-index="index" :key="index">
    <a href="#" title="restore search data">
      <p>req:&nbsp; {{item.queryData.searchQuery}} </p>
      <p>sort:&nbsp;{{item.queryData.order}}  </p> 
    </a>
  </li>
</ul>
</div>
</template>

<script>


export default {

  props:{
    savedSearches:{
      type:Array
    }
  },
  methods: {
restoreSearch: function (e) {
  // console.log(e.target.closest('li').dataset.searchQuery);
if (!!e.target.closest('li')) {
  const currentIndex = e.target.closest('li').dataset.savedStateIndex
  this.$store.commit('mutateUsers',this.savedSearches[currentIndex].users)
  this.$store.commit('mutateQueryData',this.savedSearches[currentIndex].queryData)
}
} ,

  },

};
</script>

<style lang="scss" scoped>
div {
    margin: 1em 0;
}
ul {
  margin-top: .5em;
  display: flex;
  flex-wrap: wrap;
  gap:.5em;
}
li  {
  border-radius: $borderRadius;
  background-color: $bgColor2;

  transition: all .2s easy;

  &:hover{
    background-color: lighten($bgColor2, 15);
  }
}
li a {
  display: block;
  font-size: .9em;
  padding: .5em 1em;
  font-weight: bold;
    max-width: 15rem;
}
li p {
  white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: inherit;
}

</style>