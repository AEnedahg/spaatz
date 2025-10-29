// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    plugins: [
      tailwindcss()    
    ]
  },
  css: ['@/assets/css/main.css'],
  srcDir: './',
  alias: {
    '@': './',
    '~': './',
    'assets': './assets',
    'public': './public'
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      link: [
        { rel: 'icon', type: 'image/png', href: 'logo-spaatz.png' }
      ],
      title: 'Spaatz',
      meta: [
        {
          name: 'keywords',
          content: 'blog, technology, lifestyle, tutorials, web development, design, programming, SEO, productivity, coding tips, personal growth'
        },
        {
          name: 'description',
          content: 'Welcome to our blog — your go-to space for insightful articles, tutorials, and stories on technology, design, productivity, and personal growth. Stay inspired and informed with expert opinions, how-to guides, and fresh ideas that help you learn and grow every day.'
        },
        {
          name: 'author',
          content: 'Anthony Enedah'
        }
      ]
    }
  }
})
