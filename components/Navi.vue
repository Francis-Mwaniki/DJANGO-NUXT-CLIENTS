<template>
  <nav class="w-full flex flex-wrap items-center justify-between">
    <div class="mx-auto w-full flex flex-wrap items-center justify-between">
      <div
        class="w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <button
          class="cursor-pointer text-white text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          @click="toggleNavbar"
        >
          <Icon
            name="uil:dashboard"
            class="h-10 w-10 rounded-full ml-3 text-white p-1 bg-pink-600"
            v-if="!showMenu"
            data-tip="Home"
          />
          <Icon
            name="uil:arrow-left"
            class="h-10 w-10 rounded-full ml-3 text-white p-1 bg-pink-600"
            v-else
          />
        </button>
      </div>
      <div
        class="lg:flex flex-grow items-center lg:shadow-none btn-primary"
        v-bind:class="{ hidden: !showMenu, block: showMenu }"
      >
        <ul class="md:flex flex-col lg:flex-row list-none mr-auto hidden">
          <li class="md:flex items-center hidden">
            <nuxt-link to="/">
              <button
                class="cursor-pointer tooltip tooltip-right tooltip-secondary"
                data-tip="Home"
                type="button"
              >
                <Icon
                  name="uil:dashboard"
                  class="h-10 w-10 rounded-full ml-3 p-1"
                /></button
            ></nuxt-link>
          </li>
        </ul>
        <!-- <ul class="flex flex-row lg:flex-row list-none lg:ml-auto p-1">
          <li class="flex items-center">
            <a
              href="https://www.linkedin.com/in/francis-mwaniki-378603220"
              class="tooltip tooltip-bottom tooltip-secondary"
              data-tip="Linkedln"
            >
              <Icon name="uil:linkedin" class="h-10 w-10 rounded-full ml-3" />
            </a>
          </li>

          <li class="flex items-center">
            <a
              href="https://mobile.twitter.com/notifications"
              class="tooltip tooltip-bottom tooltip-secondary"
              data-tip="Twitter"
            >
              <Icon name="uil:twitter" class="h-10 w-10 rounded-full ml-3"
            /></a>
          </li>
          <li class="flex items-center">
            <a
              href="https://github.com/Francis-Mwaniki"
              class="tooltip tooltip-bottom tooltip-secondary"
              data-tip="Github"
            >
              <Icon name="uil:github" class="h-10 w-10 rounded-full ml-3"
            /></a>
          </li>
        </ul> -->
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="flex items-center">
            <div class="p-4 flex justify-end items-end gap-4">
              <button class="btn btn-accent md:flex hidden">change theme</button>
              <select
                class="select w-60 text-blue-300 bg-slate-900"
                v-model="colorMode.preference"
              >
                <option disabled selected>Theme</option>
                <option v-for="theme of themes" :key="theme">{{ theme }}</option>
              </select>
            </div>
          </li>

          <li class="flex items-center justify-center mx-auto gap-x-2">
            <NuxtLink to="/Search">
              <button class="btn btn-square ring-2">
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
            </NuxtLink>
            <button
              class="text-xs tooltip tooltip-left tooltip-secondary font-bold uppercase px-4 btn btn-accent mt-1 md:mt-0 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 mx-auto mb-3 flex justify-center items-center"
              type="button"
              style="transition: all 0.15s ease 0s"
              data-tip="recipes"
            >
              <nuxt-link to="/Recipes" class="">
                <label for="my-modal-3 " class=""
                  >All Recipes<Icon
                    name="uil:smile"
                    class="h-10 w-7 flex justify-center items-center mx-auto rounded-full ml-3"
                /></label>
              </nuxt-link>
            </button>
            <nuxt-link to="/Login" class="">
              <button
                class="text-xs tooltip tooltip-left tooltip-secondary font-bold uppercase px-4 btn btn-accent mt-1 md:mt-0 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                type="button"
                style="transition: all 0.15s ease 0s"
                data-tip="login"
              >
                <label for="my-modal-3 " class="">login</label>

                <Icon name="uil:signout" class="h-10 w-10 rounded-full p-2" />
              </button>
            </nuxt-link>
            <button
              class="text-xs tooltip tooltip-right tooltip-secondary font-bold uppercase px-4 btn btn-accent mt-1 md:mt-0 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 mx-auto mb-3 flex justify-center items-center sm:hidden"
              type="button"
              style="transition: all 0.15s ease 0s"
              data-tip="Home"
            >
              <nuxt-link to="/" class="">
                <label for="my-modal-3 " class=""
                  ><Icon
                    name="uil:home"
                    class="h-10 w-7 flex justify-center items-center mx-auto rounded-full ml-3"
                /></label>
              </nuxt-link>
            </button>
          </li>
        </ul>
      </div>
      <!-- Put this part before </body> tag -->
    </div>
  </nav>
</template>
<script setup>
const colorMode = useColorMode();
const showMenu = ref(false);
const themes = [
  "system",
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
];
const webs = [
  {
    web: "Python",
    link:
      "https://drive.google.com/file/d/1JvqM1xYiryK70VuFPR8O30v8QcPJWBGK/view?usp=share_link",
  },
  {
    web: "Javascript",
    link:
      "https://drive.google.com/file/d/1NwXYVvnyO_vSu8-7X83znaqHquCcdNe-/view?usp=share_link",
  },
  {
    web: "Algorithm",
    link:
      "https://drive.google.com/file/d/18eKhGjlrVKdvJzRDYqtLOdvB5xlKDuy4/view?usp=sharing",
  },
  {
    web: "Social Tools",
    link:
      "https://drive.google.com/file/d/1QVeg7FiTwgJmdvmE10KsiwVtadMfuPzP/view?usp=sharing",
  },
  {
    web: "LuxuryFonts",
    link:
      "https://drive.google.com/file/d/1jvXfgYebgjZmFv6tdBr4GRvOREfSbsWJ/view?usp=sharing",
  },
];
const toggleNavbar = () => {
  showMenu.value = !showMenu.value;
};
</script>
