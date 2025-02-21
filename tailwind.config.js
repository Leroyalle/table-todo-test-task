/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      mobile: '402px',
      tablet: '834px',
      desktop: '1728px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(55, 62, 69)',
        },
        muted: {
          DEFAULT: 'rgb(255, 255, 255)',
        },
      },
    },
  },
  plugins: [],
};
