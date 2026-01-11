/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "base": "#FFFFFF",
        "primary": "#F0F0F0",
        "secondary": "#5e5e5e",
        "text":"#212121",
        "accent": "#EADCF7",
        "pop": "#B688F7",
      }
    },
  },
  plugins: [],
};
