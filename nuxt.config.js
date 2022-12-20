
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'nuxt-django | Recipes',
      meta: [
        // <meta name="nuxt-django | Recipes" content="Recipes">
        { name: 'description', content: 'recipes | customers.' }
      ],
    }
  },
 
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        'nuxt-icon',
       '@nuxtjs/supabase',
   
      ],
      colorMode: {
        preference: 'system',
        dataValue: 'theme',
        classSuffix: '',
      },
      tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
      }
})