// tailwind.config.ts — KEYOB cool palette (matches keyob.com theme-color #F5F8FA)
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0d1b2a",          // deep navy — dark sections
        paper: "#f5f8fa",        // off-white base (site theme-color)
        "paper-2": "#e7eef3",    // soft blue-grey
        mid: "#1b3a5b",          // mid navy block
        "mid-bright": "#3d6a99",
        accent: "#1d9bd1",       // cyan accent
        "accent-soft": "#4fb6e0",
        line: "rgba(13,27,42,.14)",
        "line-soft": "rgba(13,27,42,.07)",
      },
      fontFamily: {
        serif: ["Fraunces", "Georgia", "serif"],
        sans: ["'Space Grotesk'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
