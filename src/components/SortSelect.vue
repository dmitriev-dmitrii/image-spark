<template>
  <label>
    Сортировать по: &nbsp;
    <select :disabled="disabled" @change="switchSort">
      <option value="id" selected>По умолчанию</option>
      <option value="author" >Автор</option>
      <option value="title">Название</option>
    </select>
  </label>
</template>
<script>
export default {
  methods: {
    switchSort: function (e) {
      // console.log(e.target.value);
      this.$store.commit("changeSortBy", e.target.value);
    },
  },
  props:{
    disabled:{
      type:Boolean,
      default:false
    }
  }
};
</script>
<style lang="scss" scoped>
label {
  padding-left: 0.5em;
  max-height: 100%;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  white-space: nowrap;
}
select {
  display: inline-block;
  line-height: 1.3;
  padding: 0.5em 2em 0.5em 0.5em;
  width: 100%;
  max-width: 100%;
  margin: 0;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  border-radius: $borderRadius;
  color: inherit;
  // -moz-appearance: none;
  // -webkit-appearance: none;
  // appearance: none;

  background-color: $bgColor1;
}

select:hover {
}
select:focus {
}
</style>
