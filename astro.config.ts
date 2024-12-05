import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

export default defineConfig({
  site: "https://jspark.dev",
  integrations: [icon()],
  vite: {
    build: {
      target: "esnext",
    },
    plugins: [tailwindcss()],
  },
});
