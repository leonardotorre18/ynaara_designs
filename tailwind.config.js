/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
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
    }
  },
  plugins: [],
}
