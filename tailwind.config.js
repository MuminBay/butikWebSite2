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
    screens: {
      '3xsm': '320px',
      '2xsm': '440px',
      'xsm': '540px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl':'1536px',
    },
    extend: {
      right:{
        '58':'20rem',
      },
      fontFamily: {
        'roboto': ['robotomono', 'sans-serif'],
        'relation': ['relationship_of_melodrama', 'sans-serif'],// 'custom' ismi sizin belirlediğiniz isimdir
      },
    },
  },
  plugins: [],
}

