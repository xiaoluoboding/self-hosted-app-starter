<template>
  <div class="greetings">
    <h1 class="green font-semibold text-4xl text-center -top-2.5 lg:text-left">
      {{ msg }}
    </h1>
    <h3 class="text-xl text-center lg:text-left">
      You’ve successfully created a project with
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>. What's next?
    </h3>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>
