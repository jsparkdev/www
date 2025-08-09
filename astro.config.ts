import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

export const SITE_URL = 'https://jspark.dev'

export default defineConfig({
  site: SITE_URL,
  vite: {
    plugins: [tailwindcss()],
    build: {
      target: 'esnext',
    },
  },
  integrations: [sitemap()],
})
