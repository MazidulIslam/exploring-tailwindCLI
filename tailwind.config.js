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
    extend: {
      colors:{
        mycolor:{
          300:"D5D5D5"
        }
      }
    },
  },
  plugins: [],
}
