/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#6C63FF',
        gray: '#4D4C59'
      },
      fontSize: {
        titleClamp: 'clamp(1.25rem, 0.75rem + 2.5vw, 3rem)'
      }
    },
  },
  plugins: [],
}

