/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#FEFBF0',
          100: '#FDF3CC',
          200: '#FAE38A',
          300: '#F5CC4A',
          400: '#E8B523',
          500: '#C9952A',
          600: '#A67820',
          700: '#7D5A17',
          800: '#543C0F',
          900: '#2B1E07',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};