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
        primary: "#1E3A8A",
        "primary-deep": "#0F172A",
        "primary-light": "#3B82F6",
        secondary: "#475569",
        surface: "#F5F7FB",
        card: "#E8EEFF",
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Inter", "var(--font-inter)", "system-ui", "sans-serif"],
        jp: ["var(--font-noto)", "Noto Sans JP", "Hiragino Sans", "sans-serif"],
      },
      maxWidth: {
        site: "1200px",
      },
      borderRadius: {
        card: "20px",
      },
      boxShadow: {
        card: "0 10px 30px rgba(30,58,138,0.08)",
        "card-hover": "0 20px 50px rgba(30,58,138,0.15)",
        btn: "0 4px 16px rgba(30,58,138,0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
