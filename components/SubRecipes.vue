<template>
  <main>
    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="my-modal-5" class="modal-toggle" />
    <div class="modal border border-white">
      <div class="modal-box w-11/12 max-w-5xl">
        <h3 class="font-bold text-lg flex justify-center items-center mx-auto">
          What our Customer say about Us!
        </h3>
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
                  width="600"
                  height="340"
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
                        >{{ recipe.id }}</a
                      >
                    </li>
                  </ul>
                </div>
                <h3 class="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                  <a class="transition duration-150 ease-in-out">{{
                    recipe.recipeName
                  }}</a>
                </h3>
              </div>
              <p class="text-lg flex-grow">"{{ recipe.description }}"</p>
              <div class="flex justify-center items-center mx-auto my-2">
                <button class="btn btn-accent">
                  <Icon name="uil:eye" class="h-10 w-7 rounded-full" />
                  <label for="my-modal-5" class=""><span>View Details</span></label>
                </button>
              </div>
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
        <div class="modal-action">
          <label for="my-modal-5" class="btn">Close!</label>
        </div>
      </div>
    </div>

    <section class="flex flex-col justify-center antialiased">
      <span class="pt-3">
        <h1
          class="flex justify-center rounded-full bg-slate-800 max-w-lg items-center mx-auto md:text-3xl pt-3 text-lg uppercase p-1"
        >
          <img
            src="https://see.fontimg.com/api/renderfont4/OVjzP/eyJyIjoiZnMiLCJoIjoxOSwidyI6MTAwMCwiZnMiOjE5LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiIzM1M0Q0QiIsInQiOjF9/U0VSVklORyBUSEUgQkVTVCBGT09EIFJFQ0lQRSBJTiBUSEUgV09STEQ/balrog-regular.png"
            alt=""
            class="w-full p-2 rounded-full"
          />
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
            <div class="flex justify-center items-center mx-auto my-2">
              <button class="btn btn-accent">
                <Icon name="uil:eye" class="h-10 w-7 rounded-full" />
                <label for="my-modal-5" class=""><span>View Details</span></label>
              </button>
            </div>
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
  </main>
</template>

<script>
export default {
  props: ["recipes", "pending"],
};
</script>

<style></style>
