import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://kemuna.github.io',
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'uk'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
})
