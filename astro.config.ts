import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://jspark.dev',
  vite: {
    plugins: [tailwindcss()],
    build: {
      target: 'esnext',
    },
  },
  integrations: [sitemap()],
})
