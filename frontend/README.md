# Vue 3 Starter

> 🖖 A Better Vue 3 Starter Template，generate by [vuejs/create-vue](https://github.com/vuejs/create-vue).

## Preview

<div>
  <a href="https://stackblitz.com/github/xiaoluoboding/vue3-starter" rel="nofollow" target="_blank"><img src="https://camo.githubusercontent.com/bf5c9492905b6d3b558552de2c848c7cce2e0a0f0ff922967115543de9441522/68747470733a2f2f646576656c6f7065722e737461636b626c69747a2e636f6d2f696d672f6f70656e5f696e5f737461636b626c69747a2e737667" alt="" data-canonical-src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" style="max-width: 100%;"></a>
</div>

## Features

- 💨 [windicss](https://windicss.org/integrations/vite.html) - Next generation utility-first CSS framework
- 🤹 [unplugin-icons](https://github.com/antfu/unplugin-icons) - Use icons from any iconsets
- 🍍 [pinia](https://pinia.esm.dev/) - The Vue Store that you will enjoy using
- 🌍 [vue-i18n](https://vue-i18n.intlify.dev/installation.html) - Vue I18n is internationalization plugin for Vue.js
- 🛠️ [@vueuse/core](https://vueuse.org/) - Collection of essential Vue Composition Utilities

## Use the Template

### GitHub Template

[create a repo from this template on GitHub](https://github.com/xiaoluoboding/vue3-starter/generate)

### Clone to local

```bash
$> npx degit xiaoluoboding/vue3-starter my-vue3-app
$> Done. Now run:
$>
$>   cd my-vue3-app
$>   pnpm install
$>   pnpm run lint
$>   pnpm run dev
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm run dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm run lint
```

## Related Template

* [nuxt3-starter](https://github.com/xiaoluoboding/nuxt3-starter) - 💚 A Better Nuxt 3 Starter Template，generate by `nuxi`.

## License

[MIT](./LICENSE) - [@xiaoluoboding](https://github.com/xiaoluoboding)
