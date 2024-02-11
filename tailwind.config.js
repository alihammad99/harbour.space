/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      ...colors,
      primary: "#685DC5",
    },
    extend: {},
  },
  plugins: [],
};
