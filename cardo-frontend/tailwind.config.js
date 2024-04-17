/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: { '-1': '-1', },
      width: { '1000px': '1000px', '1680px': '1680px' },
      fontSize: { '28': '28px' }
    },
  },
  plugins: [],
}