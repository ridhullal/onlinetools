module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      black: "#000",
      blue: "rgba(0,130,146, 0.7)",
      darkBlue: "#1976D2",
      white: "#fff",
      grey: '#E0A39B',
      darkGrey: '#555c57',
      transparent:'transparent'
    },
    extend: {
      screens: {
        "mx-md": {'max': '767px'}
      }
    },
  },
  plugins: [],
}
