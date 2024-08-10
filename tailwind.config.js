/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "998px",
      mobile: "475px",
    },
    extend: {},
  },
  plugins: [],
};
