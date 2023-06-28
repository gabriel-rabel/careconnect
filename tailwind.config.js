/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4D77FF',
        secondary: '#B8V8FF',
        accent: '#00FF8',

      },
    },
  },
  plugins: [],
}

