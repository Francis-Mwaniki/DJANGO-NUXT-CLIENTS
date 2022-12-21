<template>
  <main>
    <div class="form-control flex justify-end items-end mr-1 p-2">
      <form class="input-group" @submit.prevent="performSearch">
        <input
          type="text"
          name="query"
          v-model="query"
          placeholder="Search…"
          class="input input-bordered ring-2 rounded"
        />

        <button type="submit" class="btn btn-square ring-2">
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
      </form>
    </div>
    <div class="flex justify-center items-center mx-auto">
      <div class="">
        <div class="flex justify-center items-center mx-auto flex-row">
          <h1 class="flex justify-start items-start mx-auto">Search</h1>

          <h2 class="is-size-5 has-text-grey">Search term: "{{ query }}"</h2>
        </div>
        <div v-show="recipes">
          <SubRecipes :recipes="recipes" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Search",
  components: {},
  data() {
    return {
      recipes: [],
      query: "",
      msg: "",
    };
  },
  mounted() {
    this.filteredResults();
  },
  methods: {
    async performSearch() {
      let url = "http://localhost:8000/api/v1/search/";
      let data = await fetch(url, {
        method: "GET",
      });
      let res = await data.json();
      this.recipes.push(res);
      console.log("----data------");
      console.log(res);
      console.log(this.recipes);
    },
  },
  computed: {},
};
</script>
