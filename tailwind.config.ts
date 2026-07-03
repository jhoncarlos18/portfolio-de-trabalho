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
        ink: "#0b1220",
        panel: "#0f1729",
        line: "#1f2937",
        bone: "#f9fafb",
        mute: "#94a3b8",
        copper: "#00d1b2",
        "copper-dim": "#0a8f7a",
        signal: "#22e6c7",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 1px 1px, rgba(237,234,227,0.035) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
export default config;
