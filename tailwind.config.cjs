/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      first: '#df8484',
      firstlight: '#FCEAEA',
      white: '#fff',
      black: '#000'
    },
    fontFamily: {
      first: ['Lobster Two', 'sans-serif'],
      second: ['Josefin Sans', 'sans-serif']
    },
  },
  plugins: [],
}
