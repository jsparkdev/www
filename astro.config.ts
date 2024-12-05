import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

export default defineConfig({
  site: "https://jspark.dev",
  integrations: [tailwind(), icon()],
  vite: {
    build: {
      target: "esnext",
    },
  },
});
