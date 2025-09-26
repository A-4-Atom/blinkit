/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Brand - Based on Blinkit theme from image
        primary: "#0C831F", // Blinkit green for brand identity
        secondary: "#F8CB46", // Yellow for accents & highlights

        // Backgrounds
        background: {
          DEFAULT: "#FFFFFF", // light mode (white)
          dark: "#0A0A0A", // dark mode (almost black from the image)
        },

        // Surfaces (cards, sheets, containers)
        surface: {
          DEFAULT: "#F5F5F5", // light mode cards
          dark: "#1A3C32", // dark mode cards (teal/dark green from the image)
        },

        // Text
        text: {
          DEFAULT: "#1F2937", // light mode primary
          dark: "#FFFFFF", // dark mode primary (white)
          muted: "#6B7280", // light mode muted
          mutedDark: "#E5E5E5", // dark mode muted (light gray)
        },
      },
      fontFamily: {
        inter: ["Inter-Regular", "sans-serif"],
        "inter-bold": ["Inter-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
