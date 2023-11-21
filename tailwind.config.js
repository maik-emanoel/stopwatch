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
        titleClamp: 'clamp(1.5rem, 1.2857rem + 1.0714vw, 2.25rem)',
        counterClamp: 'clamp(3rem, 2.5714rem + 2.1429vw, 4.5rem)'
      }
    },
  },
  plugins: [],
}

