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
        primary: "#111111",
        secondary: "#444444",
        accent: "#0F172A",
        surface: "#F5F5F7",
      },
      fontFamily: {
        sans: ["var(--font-noto)", "Hiragino Sans", "YuGothic", "sans-serif"],
        display: ["var(--font-dm-serif)", "Georgia", "serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
        tight: "-0.02em",
        wide: "0.08em",
        wider: "0.12em",
        widest: "0.2em",
      },
    },
  },
  plugins: [],
};

export default config;
