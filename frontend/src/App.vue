<template>
  <header
    class="w-full flex flex-col justify-center items-center lg:items-start"
  >
    <img
      alt="Vue logo"
      class="block my-8"
      src="@/assets/logo-sha.svg"
      width="320"
      height="320"
    />
    <div class="wrapper" lg="flex place-items-center flex-wrap">
      <HelloWorld :msg="$t('hello', { name: 'Self Hosted App Starter' })" />
      <nav
        class="w-full text-xs text-center mt-8"
        lg="text-left text-base py-4 px-0 mt-4 -ml-4"
      >
        <RouterLink to="/">{{ $t('menu.home') }}</RouterLink>
        <RouterLink to="/crud">CRUD Demo</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
      <div class="w-full text-center mt-8 space-x-4" lg="text-left">
        <button
          border="~ [var(--color-border)]"
          class="p-2 rounded-md"
          @click="(e) => toggleDark()"
        >
          <carbon:moon class="w-6 h-6" v-if="isDark" />
          <carbon:sun class="w-6 h-6" v-else />
        </button>
        <button
          border="~ [var(--color-border)]"
          class="p-2 rounded-md"
          @click="toggleLocales"
        >
          <carbon:language class="w-6 h-6" />
        </button>
        <button
          border="~ [var(--color-border)]"
          class="p-2 rounded-md"
          @click="gotoGitHub"
        >
          <carbon:logo-github class="w-6 h-6" />
        </button>
      </div>
    </div>
  </header>

  <RouterView />

  <footer class="fixed left-0 bottom-4 w-full">
    <div class="mt-8 flex flex-col justify-center items-center space-y-2">
      <p>
        Code with ❤️ & ☕️ by
        <a href="https://github.com/xiaoluoboding" target="_blank"
          >xiaoluoboding</a
        >
      </p>
      <p class="flex items-center space-x-1">
        <carbon:logo-twitter class="text-sky-500" />
        <span>
          <a
            href="https://twitter.com/xiaoluoboding"
            class="text-neon"
            target="_blank"
          >
            Follow me on Twitter
          </a>
        </span>
        <span class="px-2 text-sky-300">|</span>
        <carbon:cafe class="text-sky-500" />
        <span>
          <a
            href="https://www.buymeacoffee.com/xlbd"
            target="_blank"
            class="text-neon"
          >
            Buy me a coffee
          </a>
        </span>
        <span class="px-2 text-sky-300">|</span>
        <mdi:heart class="text-sky-500" />
        <span>
          <a
            href="https://github.com/sponsors/xiaoluoboding"
            target="_blank"
            class="text-neon"
          >
            Sponsor me on GitHub
          </a>
        </span>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { onMounted } from 'vue'

import HelloWorld from '@/components/HelloWorld.vue'
import { isDark, toggleDark } from '@/composables/useDark'
import { getSystemStatus, getUserInfo, login } from '@/services'
import { useUserStore } from '@/stores/user'

const { locale, availableLocales } = useI18n()
const userStore = useUserStore()

const gotoGitHub = () => {
  window.open(
    'https://github.com/xiaoluoboding/self-hosted-app-starter',
    '_blank'
  )
}

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  console.log(locale.value)
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}

const loginAsGuest = async () => {
  await login('chris.damon@demo.com', '123456')
  const { data: user } = await getUserInfo()
  if (user) {
    userStore.setCurrentUser(user)
    console.log('login success')
  }
}

onMounted(async () => {
  const status = await getSystemStatus()
  await loginAsGuest()

  console.log(status)

  userStore.fetchUserList()
})
</script>

<style>
@import '@/assets/base.css';

#app {
  @apply max-w-screen-xl mx-auto my-0 p-8 font-normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1) !important;
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }
}
</style>
