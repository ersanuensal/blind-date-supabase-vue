module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primaryc": "#840705",

      }
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    flex: {
      "1": "1 1 0%",
      "2": "2 2 0%",
    },
    container: {
      center: true,
      screen: {
        lg: "1124px",
        xl: "1124px",

      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}