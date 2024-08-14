export default {
  language: 'en-US',
  title: 'SHA Starter',
  description: 'A starter for the self-hosted app, help you to build your next full-stack project.',
  base: '/self-hosted-app-starter/',
  themeConfig: {
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Guide',
        link: '/overview/'
      },
      {
        text: 'Vue 3 Starter',
        link: 'https://github.com/xiaoluoboding/vue3-starter'
      },
      {
        text: 'Nuxt 3 Starter',
        link: 'https://github.com/xiaoluoboding/nuxt3-starter'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/xiaoluoboding/self-hosted-app-starter'
      }
    ],
    sidebar: [{
      text: 'Overview',
      items: [{
          text: 'Getting Started',
          link: '/overview/'
        },
        {
          text: 'Setup the Project',
          link: '/overview/setup-the-project'
        },
        {
          text: 'Deployment',
          link: '/overview/deployment'
        },
      ]
    }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present xiaoluoboding'
    }
  }
}