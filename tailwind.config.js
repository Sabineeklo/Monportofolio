/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6EEF2',
          100: '#B0CBD6',
          200: '#8AB2C2',
          300: '#558EA7',
          400: '#347995',
          500: '#01577B',
          600: '#014F70',
          700: '#013E57',
          800: '#013044',
          900: '#002534',
        },
        secondary: {
          50: '#E6F7FF',
          100: '#B0E7FF',
          200: '#8ADCFF',
          300: '#54CCFE',
          400: '#33C2FE',
          500: '#00B3FE',
          600: '#00A3E7',
          700: '#007FB4',
          800: '#00628C',
          900: '#004B6B',
        },
        neutral: {
          50: '#E6E6E6',
          100: '#B0B0B0',
          200: '#8A8A8A',
          300: '#545454',
          400: '#333333',
          500: '#000000',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
        white: '#FFFFFF',

        gradian: {
          start: '#FFFFFF',
          end: '#E6F7FF',
        },
      },
    },
  },
  plugins: [],
};
