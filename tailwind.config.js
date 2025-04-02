/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"]
  ,
  theme: {
    extend: {
        colors: {
            "background-right": "#D0D0D0", // это фон на главную страницу
        },
    },
  },
  plugins: [daisyui,],
}