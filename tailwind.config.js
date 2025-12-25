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
        "base": "#EFEFEF",
        "primary": "#333333",
        "secondary": "#5e5e5e",
        "accent": "#ddf45b",
        "pop": "#e2aedd",
      }
    },
  },
  plugins: [],
};
