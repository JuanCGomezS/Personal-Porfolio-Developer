/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Roboto"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        custom: "#bf5a1c",
        button: "#3b82f6",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
