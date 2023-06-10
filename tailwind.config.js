// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      530: { max: "530px" },
    },
    fontFamily: {
      ubuntu: ["Ubuntu"],
      roboto: ["Roboto"],
    },
    container: {
      center: true,
      padding: "10px",
    },
    extend: {
      gridTemplateColumns: {
        "auto-full": "repeat(auto-fill, 390px)",
        "auto-fill": "repeat(auto-fill, 300px)",
      },
      // colors:{
      //   red: '#fff'
      // }
    },
  },
  plugins: [],
}
