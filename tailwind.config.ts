import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./course/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#202124",
        clay: "#b86145",
        sun: "#f5c542",
        mint: "#69b99d",
        ocean: "#4b86b4",
        paper: "#fffaf3"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(32, 33, 36, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
