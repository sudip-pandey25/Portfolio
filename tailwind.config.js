/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors:{
      },

      fontFamily:{
        'sudip-font' : ['Inter' , 'Poppins' , 'sans-serif'],
        'sdp-font': 'Poppins',
        'title-font': 'Josefin Sans',
        'title-font-2': 'Crimson Text'
      }
    },
  },
  plugins: [],
}

