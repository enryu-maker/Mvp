/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#33c2f5',
        'pblack': "#191c20",
        'poutline': "#d8dadc"
      },
    },
  },
  plugins: [],
}

