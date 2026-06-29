/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        dancing: ['"Dancing Script"', 'cursive'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        brown: {
          DEFAULT: 'rgb(98, 56, 23)',
          dark: '#441f07',
          mid: '#47230a',
        },
        'purple-btn': '#ce91f4',
        'purple-card': 'rgb(179, 149, 212)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
    },
  },
  plugins: [],
}
