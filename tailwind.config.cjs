/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        dawn: 'rgb(148, 148, 149)',
        dusk: 'rgb(32, 32, 34)',
        night: 'rgb(18, 18, 18)',
        zenith: 'rgb(255, 255, 255)'
      }
    }
  },
  plugins: []
}
