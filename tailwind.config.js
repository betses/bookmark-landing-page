/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'soft-blue': '#5368df',
        'soft-red': '#fa5757',
        'grayish-blue': '#9194a1',
        'very-dark-blue': '#252b46',
      },
      fontFamily: { sans: ['Rubik', 'sans-serif'] },
    },
  },
  plugins: [],
};
