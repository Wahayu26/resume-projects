import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        soc: {
          bg: "#0B1220",
          surface: "#1B2638",
          panel: "#111A2E",
          amber: "#F2A516",
          amberLight: "#FFBE3D",
          cyan: "#06B6D4",
          emerald: "#10B981",
          danger: "#EF4444",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "soc-grid":
          "linear-gradient(to right, rgba(242, 165, 22, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(242, 165, 22, 0.04) 1px, transparent 1px)",
        "soc-radial":
          "radial-gradient(circle at 50% 0%, rgba(242, 165, 22, 0.14), transparent 65%)",
      },
      boxShadow: {
        "amber-glow": "0 12px 32px -8px rgba(242, 165, 22, 0.25)",
        "cyan-glow": "0 10px 28px -6px rgba(6, 182, 212, 0.22)",
        "card-soft": "0 10px 30px -10px rgba(2, 6, 23, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
