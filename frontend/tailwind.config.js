/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'tablet-1': {'max': '1146px'},
      'tablet-2': {'max': '1005px'},
      'tablet-3': {'max': '728px'},
      'tablet-4': {'max': '550px'}
    }
  },
  plugins: [],
}

