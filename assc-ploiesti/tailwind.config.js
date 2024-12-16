/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        3: '3px',
      },
      colors: {
        primary: 'rgb(0,51,153)',
        white: '#fff',
        active: 'rgb(0,51,153)',
      },
      fontFamily: {
        arial: ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
