/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F7FF1A", // Blinkit-inspired yellow-green
          light: "#FDFF6A", // soft light yellow-green
          dark: "#D4E100", // deeper matte yellow-green
        },
        secondary: {
          DEFAULT: "#4CAF50", // soft matte green
          light: "#81C784", // lighter green for light mode
          dark: "#388E3C", // deeper green for dark mode
        },
        background: {
          light: "#FFFFFF", // light mode background
          dark: "#121212", // dark mode background
        },
        surface: {
          light: "#F9F9F9", // cards/surfaces in light mode
          dark: "#1E1E1E", // cards/surfaces in dark mode
        },
        text: {
          light: "#212121", // primary text on light bg
          dark: "#FFFFFF", // primary text on dark bg
          mutedLight: "#616161", // secondary text light mode
          mutedDark: "#BDBDBD", // secondary text dark mode
        },
      },
    },
  },
  plugins: [],
};
