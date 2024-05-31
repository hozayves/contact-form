/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      'greenLighter': 'hsl(148, 38%, 91%)',
      'greenMedium': 'hsl(169, 82%, 27%)',
      'red': 'hsl(0, 66%, 54%)',
      'white': 'hsl(0, 0%, 100%)',
      'greyMedium': 'hsl(186, 15%, 59%)',
      'greyDarker': 'hsl(187, 24%, 22%)'
    },
    extend: {
      fontFamily: {
        'Karla': ['Karla', 'sans-serif'],
      },
      fontSize: {
        'labelSize': '16px'
      }
    },
  },
  plugins: [],
}
export default config