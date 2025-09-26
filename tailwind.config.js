/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0C831F", 
        secondary: "#F8CB46", 

        background: {
          DEFAULT: "#FFFFFF",
          dark: "#0A0A0A",
        },

        surface: {
          DEFAULT: "#F5F5F5", 
          dark: "#1A3C32",
        },

        text: {
          DEFAULT: "#1F2937",
          dark: "#FFFFFF",
          muted: "#6B7280",
          mutedDark: "#E5E5E5",
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
