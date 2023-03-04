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
        '2vw': '20vw',
        '2pxw': '200px'
      },
      height: {
        '2xx': '30vw',
        '4vh': '40vh',
        '2pxh': '290px'
      },
      margin: {
        '10px': '10px'
      },
      // screens: {
      //   tablet: '640px',
      //   // => @media (min-width: 640px) { ... }

      //   laptop: '1024px',
      //   // => @media (min-width: 1024px) { ... }

      //   desktop: '1280px'
      //   // => @media (min-width: 1280px) { ... }
      // }
    }
  },
  plugins: []
}
