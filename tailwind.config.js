/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily:{
        lalezar:'Lalezar',
        vazir:['"Vazir FD-WOL"'],
        monserrat:['Montserrat'],
        yekanBakh:['"Yekan Bakh FaNum"']
      },
      colors:{
        primary:'#402EBD',
        secondary:'#0A0E22',
      }
    },
  },
}

