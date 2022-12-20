<template>
  <main>
    <div class="form-control flex justify-end items-end mr-1 p-2">
      <div class="input-group">
        <input
          type="text"
          name="query"
          v-model="q"
          placeholder="Search…"
          class="input input-bordered ring-2 rounded"
        />

        <button class="btn btn-square ring-2" @click="performSearch">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="flex justify-center items-center mx-auto">
      <div class="">
        <div class="flex justify-center items-center mx-auto flex-row">
          <h1 class="flex justify-start items-start mx-auto">Search</h1>

          <h2 class="is-size-5 has-text-grey">Search term: "{{ q }}"</h2>
        </div>

        <SubRecipes :recipes="recipes" />
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  components: {},
  data() {
    return {
      recipes: [],
      query: "",
      q: "",
    };
  },
  mounted() {
    let uri = window.location.search.substring(1);
    let params = new URLSearchParams(uri);

    if (params.get("query")) {
      this.query = params.get("query");

      this.performSearch();
    }
  },
  methods: {
    async performSearch() {
      await axios
        .post("http://localhost:8000/api/v1/search/", { query: this.query })
        .then((response) => {
          this.recipes = response.data;
          console.log(this.recipes, response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
