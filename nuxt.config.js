
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
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