/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(75, 82, 88)',
        },
        muted: {
          DEFAULT: 'rgb(255, 255, 255)',
        },
      },
    },
  },
  plugins: [],
};
