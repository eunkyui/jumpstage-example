import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: '#6b48ff',
          dark: '#5a3dd4',
        },
        secondary: {
          DEFAULT: '#ff4898',
          dark: '#d43d7f',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
