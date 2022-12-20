<template>
  <main>
    <SubRecipes :recipes="recipes" pending="pending" />
  </main>
</template>

<script>
export default {
  data() {
    return {
      recipes: [],
      newRecipe: [],
      pending: false,
    };
  },
  methods: {
    async fetchAllRecipes() {
      let url = "http://localhost:8000/api/v1/recipes/";
      let data = await fetch(url, {
        method: "GET",
      });
      let res = await data.json();
      this.recipes.push(res);
      console.log("----data------");
      console.log(res);
      console.log(this.recipes);
    },
    formattedDate(time) {
      const date = new Date(time);
      date.toLocaleDateString();
      this.recipes.push(date);
      console.log(this.recipes);
    },
  },
  mounted() {
    this.fetchAllRecipes();
  },
  computed: {},
};
</script>

<style></style>
