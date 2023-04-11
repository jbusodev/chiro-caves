/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./public/**/*.html",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#70E000",
          700: "#66CC00",
          900: "#5CB800",
        },
        dark: "#1B1B1B",
        secondary: "#3AA8C1",
        whi: "#F8F8FF",
        accent: "#F5F5F5",
      },
    },
  },
  variants: {},
  plugins: [],
};
