/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Brand
        primary: "#FF6B35",   // Fresh orange for CTAs
        secondary: "#4CAF50", // Green for accents & freshness

        // Backgrounds
        background: {
          DEFAULT: "#FFFDF7", // light
          dark: "#121212",    // dark
        },

        // Surfaces (cards, sheets, containers)
        surface: {
          DEFAULT: "#F5F5F5",
          dark: "#1E1E1E",
        },

        // Text
        text: {
          DEFAULT: "#1F2937",    // light mode primary
          dark: "#F5F5F5",       // dark mode primary
          muted: "#6B7280",      // light mode muted
          mutedDark: "#9CA3AF",  // dark mode muted
        },
      },
      fontFamily: {
        inter: ["Inter-Regular", "sans-serif"],
        "inter-bold": ["Inter-Bold", "sans-serif"],
      }
    },
  },
  plugins: [],
};
