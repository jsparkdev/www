import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://jspark.dev",
  vite: {
    plugins: [tailwindcss()],
    build: {
      target: "esnext",
    },
  },
  integrations: [sitemap()],
});
