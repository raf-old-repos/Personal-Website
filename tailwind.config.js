module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./layouts/*.{js,ts,jsx,tsx}"],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'regular': ["IBM Plex Sans", "ui-monospace"]
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
