
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
    <input v-model.trim="queryData.searchQuery" type="search" required="true"  :disabled="loading" />
    <label>
      Sort repos count: &nbsp;
      <select v-model="queryData.order" :disabled="loading">
        <option value="desc">descending</option>
        <option value="asc">ascending</option>
      </select>
    </label>
    <saved-search-list :savedSearches="savedSearches" />
    <div class="search-form__buttons-group">
      <app-spinner v-show="loading" >Search...</app-spinner>
      <button class="button" type="reset" :disabled="!queryData.searchQuery || loading">
        reset
      </button>
      <button
        class="button primary"
        type="submit"
        :disabled="!queryData.searchQuery || loading"
      >
        search
      </button>
    </div>
  </form>
</template>

<script>
import SavedSearchList from "./SavedSearchList.vue";
import toStorage from "@/toStorage";
import AppSpinner from "@/components/AppSpinner.vue";
export default {
  components: { SavedSearchList, AppSpinner },
  data: () => {
    return {
      loading:false,
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
      this.loading = true;
      this.$store.commit("mutateQueryData", this.queryData);
      this.$store.dispatch("getUsers").then(() => {
        this.savedSearches = toStorage.getData();
        this.loading = false;
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
    &:disabled {
    cursor: default;
		opacity: 0.7;
    }
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

    display: flex;
    gap: .5em;
    align-self: flex-end;
  }
}
</style>