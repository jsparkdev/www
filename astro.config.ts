import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://jspark.dev",
  integrations: [sitemap()],
  vite: {
    build: {
      target: "esnext",
    },
    plugins: [tailwindcss()],
  },
  experimental: {
    svg: true,
  },
});
