<template>
  <section class=" ">
    <div
      class="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between"
    >
      <div
        class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
      >
        <img
          src="https://cdn.pixabay.com/photo/2013/07/13/01/22/vegetables-155616__340.png"
          alt=""
          class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
        />
      </div>
      <div
        class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left"
      >
        <h1 class="text-5xl font-bold leading-none sm:text-6xl">
          Find <span class="">Your Best Dish</span> Ever
        </h1>
        <p class="mt-6 mb-8 text-lg sm:mb-12">
          Recipes are a helpful resource for cooking, providing clear instructions and a
          list of ingredients for preparing a specific dish.
          <br class="hidden md:inline lg:hidden" />They can be a great way to learn new
          culinary skills and try out new flavors.
        </p>
        <div
          class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start"
        >
          <NuxtLink
            to="/Login"
            class="btn flex justify-center items-center text-lg my-auto btn-accent font-semibold rounded"
            >Get Started</NuxtLink
          >
          <NuxtLink
            to="/Recipes"
            class="btn btn-accent text-lg font-semibold border rounded"
            >See our Recipes</NuxtLink
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
