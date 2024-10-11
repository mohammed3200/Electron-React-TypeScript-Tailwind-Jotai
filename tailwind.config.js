/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // Enable JIT mode
  content: ['./src/renderer/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
}
