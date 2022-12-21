<template>
  <main>
    <Heros />
    <SubRecipes :recipes="recipes" />
    <MidHero />
    <Contact />
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
      let url = "http://localhost:8000/api/v1/";
      let data = await fetch(url, {
        method: "GET",
      });
      let res = await data.json();
      this.recipes.push(res);
    },
    formattedDate(time) {
      const date = new Date(time);
      date.toLocaleDateString();
      this.recipes.push(date);
    },
  },

  mounted() {
    this.fetchAllRecipes();
  },
  computed: {},
};
</script>

<style></style>
