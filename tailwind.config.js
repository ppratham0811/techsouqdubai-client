/** @type {import('tailwindcss').Config} */
import { colors } from "tailwindcss/colors";

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#26619C",
        // #23A5D9
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
