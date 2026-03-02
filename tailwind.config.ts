import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:  "#1E3A8A",
        blue:     "#3B82F6",
        deep:     "#0F172A",
        herodk:   "#0B0F1A",
        base:     "#F5F7FB",
        card:     "#E8EEFF",
        border:   "#E6E8EB",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        jp:   ["Noto Sans JP", "Hiragino Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
