/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge:[],
  darkMode:['media'],
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
