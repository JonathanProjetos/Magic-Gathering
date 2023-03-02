/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-texture': "url(./assets/home.jpg')"
      },
      width: {
        '2xx': '30vw',
        '2vw': '20vw'
      },
      height: {
        '2xx': '30vw',
        '4vh': '40vh'
      }
    }
  },
  plugins: []
}
