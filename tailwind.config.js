/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    container:{
      center: true,
      padding: '1rem'
    },
    extend: {
      fontFamily: {
        poppins: "'poppins', san-serif",
        roboto: "'roboto', san-serif"
      },
      colors: {
        'primary': '#C75400',
        'secondary': '#005AC7'
      }
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      visibility: ['group-hover'],
    },
  },
  plugins: [],
}

