<template>
  <div class="">
    {{ user }}
  </div>
</template>

<script setup>
const user = useSupabaseUser();

definePageMeta({
  middleware: "auth",
});
</script>

<style></style>
