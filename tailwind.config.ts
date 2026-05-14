import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        theatre: {
          night: "#080607",
          ink: "#121012",
          velvet: "#251015",
          ember: "#ffb23f",
          gold: "#d7a441",
          bone: "#f8f1df",
          smoke: "#b9ad9a"
        }
      },
      fontFamily: {
        display: ["Georgia", "Times New Roman", "serif"],
        sans: ["Segoe UI", "Inter", "Arial", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 32px rgba(255, 178, 63, 0.18)",
        stage: "0 28px 70px rgba(0, 0, 0, 0.42)"
      }
    }
  },
  plugins: []
};

export default config;
