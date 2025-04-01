/** @type {import('tailwindcss').Config} */


export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"]
  ,
  theme: {
    extend: {
        colors: {
            "background": "#D0D0D0", // это фон на главную страницу
        },
    },
  },
  plugins: [],
}