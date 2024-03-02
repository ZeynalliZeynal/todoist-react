/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        default: ['Inter'],
      },
      colors: {
        bgColor: '#fefdfc',
        red: {
          500: '#e34432',
          600: '#cf3520',
        },
        gray: {
          100: '#f5f5f5',
          500: '#757575',
          700: '#25221e',
          '700-7': '#25221e11',
          '700-70': '#25221eb2',
          '700-300': '#25221e33',
          900: '#202020',
        },
        selection: '#FFFFAA',
        inputBorder: '#e6e6e6',
        borderFocus: '#b8b8b8',
      },
      borderRadius: {
        button: '8px',
      },
    },
  },
  plugins: [],
}
