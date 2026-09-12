import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "var(--ink)",
          soft: "var(--ink-soft)",
          raise: "var(--ink-raise)",
          line: "var(--ink-line)",
        },
        paper: {
          DEFAULT: "var(--paper)",
          soft: "var(--paper-soft)",
          line: "var(--paper-line)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          soft: "var(--accent-soft)",
          deep: "var(--accent-deep)",
        },
        signal: "var(--signal)",
        ember: "var(--ember)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        display: ["clamp(2.5rem, 6.4vw, 5.2rem)", { lineHeight: "1.0", letterSpacing: "-0.038em" }],
        hero: ["clamp(2.3rem, 5.4vw, 4.6rem)", { lineHeight: "1.05", letterSpacing: "-0.034em" }],
        section: ["clamp(1.9rem, 3.8vw, 3.25rem)", { lineHeight: "1.08", letterSpacing: "-0.03em" }],
        title: ["clamp(1.4rem, 2.2vw, 1.95rem)", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        lead: ["clamp(1.1rem, 1.5vw, 1.35rem)", { lineHeight: "1.55", letterSpacing: "-0.012em" }],
        micro: ["0.72rem", { lineHeight: "1", letterSpacing: "0.16em" }],
      },
      maxWidth: {
        shell: "84rem",
        prose: "42rem",
      },
      transitionTimingFunction: {
        arv: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        drift: {
          "0%,100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(0,-2%,0) scale(1.04)" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.75)", opacity: "0.55" },
          "100%": { transform: "scale(1.9)", opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        caret: { "0%,49%": { opacity: "1" }, "50%,100%": { opacity: "0" } },
      },
      animation: {
        drift: "drift 18s ease-in-out infinite",
        pulseRing: "pulseRing 3.6s ease-out infinite",
        marquee: "marquee 42s linear infinite",
        caret: "caret 1.1s steps(1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
