<template>
  <div class="greetings">
    <h1 class="green font-semibold text-4xl text-center -top-2.5 lg:text-left">
      {{ msg }}
    </h1>
    <h3 class="text-xl text-center lg:text-left">
      You’ve successfully created a project with
      <ul class="py-4">
        <li class="flex items-center">
          <carbon:dot-mark class="text-sky-400" /><a
            target="_blank"
            href="https://go.dev/"
            >Go</a
          >
        </li>
        <li class="flex items-center">
          <carbon:dot-mark class="text-sky-600" /><a
            target="_blank"
            href="https://www.sqlite.org/index.html"
            >SQLite</a
          >
        </li>
        <li class="flex items-center">
          <carbon:dot-mark class="text-indigo-600" /><a
            target="_blank"
            href="https://vitejs.dev/"
            >Vite</a
          >
        </li>
        <li class="flex items-center">
          <carbon:dot-mark class="text-green-600" /><a
            target="_blank"
            href="https://vuejs.org/"
            >Vue 3</a
          >
        </li>
        <li class="flex items-center">
          <carbon:dot-mark class="text-sky-500" /><a
            target="_blank"
            href="https://windicss.org/"
            >WindiCSS</a
          >
        </li>
      </ul>
      What's next?
    </h3>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>
