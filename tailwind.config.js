/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2ABFCD',
        bg: '#FDF5F6',
      },
      // colors: {
      //   gray: colors.coolGray,
      //   blue: colors.lightBlue,
      //   red: colors.rose,
      //   pink: colors.fuchsia,
      // },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}
