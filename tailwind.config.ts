import type { Config } from "tailwindcss";

// Everlab's extracted design tokens, applied 1:1.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  // Hover styles only where a real pointer hovers, so a tap on iPhone doesn't leave them stuck on.
  future: { hoverOnlyWhenSupported: true },
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        offwhite: "#f4f4f3",
        grey: "#fafafa",
        cream: "#faf7f4",
        beige: "#ece4dc",
        black: "#000000",
        ink: "#181818",
        neutral: {
          DEFAULT: "#777670",
          dark: "#545454",
          darker: "#242323",
          light: "#b6b5b5",
          lighter: "#dadada",
        },
        accent: { DEFAULT: "#d04926", light: "#f17551", hot: "#ff4d00" },
        success: "#1db16b",
        atlantis: { DEFAULT: "#60d0d8", dark: "#3fb6bf" }, // sampled from the Atlantis logo mark
      },
      opacity: { 24: "0.24", 48: "0.48", 64: "0.64", 72: "0.72", 85: "0.85" },
      borderRadius: {
        hero: "24px",
        card: "20px",
        sm: "12px",
        md: "16px",
        nav: "14px",
        pill: "50px",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "Arial", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: { container: "1280px", wide: "1400px" },
      // Screens with room for pinned (sticky) sections: wide enough, and tall enough that a whole pinned panel
      // fits. Phones and short laptop windows get the same content as plain, scrolling sections.
      screens: { stack: { raw: "(min-width: 768px) and (min-height: 720px)" } },
      keyframes: {
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        "marquee-alt": { "0%": { transform: "translateX(-50%)" }, "100%": { transform: "translateX(0)" } },
      },
      animation: {
        marquee: "marquee 50s linear infinite",
        "marquee-fast": "marquee 30s linear infinite",
        "marquee-alt": "marquee-alt 30s linear infinite",
      },
      transitionTimingFunction: { out: "cubic-bezier(0.22, 1, 0.36, 1)" },
    },
  },
  plugins: [],
};

export default config;
