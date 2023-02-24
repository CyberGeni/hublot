/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["PP Fragment Sans", "sans-serif"],
        glare: ["PP Fragment Glare", "sans-serif"],
        serif: ["PP Fragment Serif", "serif"],
        text: ["PP Fragment Text", "sans-serif"],
      },
    },
  },
  plugins: [],
}