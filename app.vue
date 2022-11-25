<template>
  <div>
    <Navi />
    <NuxtPage />
  </div>
</template>

<script>
import Navi from "~/components/Navi.vue";
export default {
  components: { Navi },
  watch: {
    $route() {
      location.reload();
    },
  },
};
</script>
