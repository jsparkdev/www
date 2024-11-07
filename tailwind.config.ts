import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.astro"],
  theme: {
    fontFamily: {
      sans: '"Inter", sans-serif',
    },
  },
} satisfies Config;
