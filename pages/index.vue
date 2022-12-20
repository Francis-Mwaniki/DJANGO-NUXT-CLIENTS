<template>
  <section class="flex flex-col justify-center antialiased">
    <span>
      <h1
        class="flex justify-center items-center mx-auto md:text-3xl pt-3 text-lg uppercase p-1"
      >
        Serving the Best Food Recipe in the world
      </h1>
      <hr class="w-3/5 pt-1 flex justify-center items-center mx-auto" />
    </span>
    <div
      class="max-w-6xl mx-auto p-4 sm:px-6 h-full"
      v-for="recipe in recipes[0]"
      :key="recipe.id"
    >
      <!-- Blog post -->
      <div
        class="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center"
      >
        <a class="relative block group">
          <div
            class="absolute inset-0 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
            aria-hidden="true"
          ></div>
          <div
            class="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out"
          >
            <img
              class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
              :src="recipe.get_image"
              width="540"
              height="303"
            />
          </div>
        </a>
        <div>
          <div>
            <div class="mb-3">
              <ul class="flex flex-wrap text-xs font-medium -m-1">
                <li class="m-1">
                  <a
                    class="inline-flex text-center py-1 px-3 rounded-full transition duration-150 ease-in-out"
                    >Fresh</a
                  >
                </li>
                <li class="m-1">
                  <a
                    class="inline-flex text-center py-1 px-3 rounded-full transition duration-150 ease-in-out"
                    >{{ recipe.host }}</a
                  >
                </li>
              </ul>
            </div>
            <h3 class="text-2xl lg:text-3xl font-bold leading-tight mb-2">
              <a class="transition duration-150 ease-in-out">{{ recipe.recipeName }}</a>
            </h3>
          </div>
          <p class="text-lg flex-grow">"{{ recipe.description }}"</p>
          <div class="chat chat-end">
            <div class="chat-bubble chat-bubble">
              <p class="text-lg flex-grow p-1 italic">
                {{ recipe.quote }}
              </p>
            </div>
          </div>

          <div class="flex items-center mt-4">
            <a>
              <img
                class="rounded-full flex-shrink-0 mr-4"
                src="https://cdn.pixabay.com/photo/2016/08/21/16/31/emoticon-1610228__340.png"
                width="40"
                height="40"
                alt="Author 04"
              />
            </a>
            <div>
              <a class="font-medium transition duration-150 ease-in-out">{{
                recipe.cookName
              }}</a>
              <span class=""> - </span>
              <span class="">{{ recipe.date_added }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      recipes: [],
      newRecipe: [],
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
