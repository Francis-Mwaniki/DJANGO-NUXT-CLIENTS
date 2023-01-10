<template>
  <main>
    <div>
      <div
        class="flex justify-center items-center flex-col mx-auto gap-y-3 bg-slate-800 rounded max-w-md ring-2"
      >
        <div class="">
          <h3 class="">{{ res.recipeName }}</h3>
          <p>{{ res.description }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: ["res"],
  data() {
    return {
      customers: [],
      newRecipe: [],
      newPeople: [],
      recipes: [],
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
    async fetchAllCustomers() {
      let url = "http://localhost:8000/api/v1/client/";
      let data = await fetch(url, {
        method: "GET",
      });
      let res = await data.json();
      this.customers.push(res);
      console.log(this.customers);
    },
    formattedCustomers(id) {
      let data = this.customers.filter((i) => {
        return i.id === id;
      });
      this.newPeople.push(data);
      console.log(data);
    },
    formattedRecipes(id) {
      let data = this.recipes.filter((i) => {
        return i.id === id;
      });
      this.newRecipe.push(data);
      console.log(this.newRecipe);
    },
  },

  mounted() {},
  computed: {},
};
</script>
