/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(0,51,153)',
        white: '#fff',
      },
      fontFamily: {
        arial: ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
