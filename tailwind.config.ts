import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.astro"],
  theme: {
    fontFamily: {
      sans: '"Geist", sans-serif',
    },
  },
} satisfies Config;
