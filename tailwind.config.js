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
      grey: '#666e68',
      darkGrey: '#555c57'
    },
    extend: {
      screens: {
        "mx-md": {'max': '767px'}
      }
    },
  },
  plugins: [],
}
