
<template>
  <form
    class="search-form"
    @reset="resetForm"
    @submit.prevent="sendSearchReqest"
  >
    <legend>
      <p class="title">GitHub Search</p>
      <span>Image Spark test</span>
    </legend>
    <input v-model.trim="queryData.searchQuery" type="search" required="true" />
    <label>
      Sort repos count: &nbsp;
      <select v-model="queryData.order">
        <option value="desc">descending</option>
        <option value="asc">ascending</option>
      </select>
    </label>
    <saved-search-list :savedSearches="savedSearches" />
    <div class="search-form__buttons-group">
      <button class="button" type="reset" :disabled="!queryData.searchQuery">
        reset
      </button>
      <button
        class="button primary"
        type="submit"
        :disabled="!queryData.searchQuery"
      >
        search
      </button>
    </div>
  </form>
</template>

<script>
import SavedSearchList from "./SavedSearchList.vue";
import toStorage from "@/toStorage";
export default {
  components: { SavedSearchList },
  data: () => {
    return {
      queryData: {
        searchQuery: "",
        order: "desc",
        pageCounter: 0,
      },
      savedSearches: [],
    };
  },

  methods: {
    sendSearchReqest: function () {
      this.$store.commit("mutateQueryData", this.queryData);
      this.$store.dispatch("getUsers").then(() => {
        this.savedSearches = toStorage.getData();
      });
    },
    resetForm: function () {
      this.queryData = {
        searchQuery: "",
        order: "desc",
        pageCounter: 0,
      };
    },
  },
  mounted() {
    this.savedSearches = toStorage.getData();
  },
};
</script>

<style lang="scss">
.search-form {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  margin: 1em 0;

  border: 1px solid currentColor;
  border-radius: $borderRadius;
  padding: 0.5em 1em;

  & select,
  & input[type="search"] {
    font-size: 1em;
    border: 0;
    border-radius: $borderRadius;
    padding: 0.4em 0.5em;
    background-color: $bgColor2;
    color: $mainTxtColor;
  }
  & input[type="search"] {
    margin: 1em 0;
    width: 100%;
    @media (min-width: 575.98px) {
      align-self: flex-end;

      max-width: 60rem;
    }
  }
  & label {
    align-self: flex-end;
    display: flex;
    align-items: center;
    margin-bottom: 1em;
  }
  &__buttons-group {
    align-self: flex-end;
  }
}
</style>