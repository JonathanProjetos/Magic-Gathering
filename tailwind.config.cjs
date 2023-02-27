/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      width: {
        '2xx': '30vw'
      },
      height: {
        '2xx': '30vw'
      }
    }
  },
  plugins: []
}
