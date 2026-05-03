module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* =========================
           🌑 LIGHT MODE (DARK UI)
        ========================= */

        background: "#0b0f19",
        foreground: "#ffffff",

        surface: "#111827",
        surfaceHover: "#1f2937",

        border: "#1f2937",

        text: "#e5e7eb",
        muted: "#9ca3af",

        primary: "#ffffff",        // buttons (light mode)
        primaryText: "#000000",    // button text (light mode)

        accent: "#22d3ee",

        /* =========================
           🌕 DARK MODE (LIGHT UI)
        ========================= */

        dark: {
          background: "#ffffff",
          foreground: "#0f172a",

          surface: "#f3f4f6",
          surfaceHover: "#e5e7eb",

          border: "#e5e7eb",

          text: "#0f172a",
          muted: "#6b7280",

          primary: "#000000",        // buttons (dark mode)
          primaryText: "#ffffff",    // button text (dark mode)

          accent: "#06b6d4",
        },
      },
    },
  },
  plugins: [],
};