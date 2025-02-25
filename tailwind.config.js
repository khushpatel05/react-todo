/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // This ensures that Tailwind processes all your React files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
