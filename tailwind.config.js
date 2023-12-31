/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      rubik: ['"Rubik"', "sans-serif"],
    },
    extend: {
      backgroundImage: {
        mobile: "url('../images/pattern-bg-mobile.png')",
        desktop: "url('../images/pattern-bg-desktop.png')",
      },
    },
  },
  plugins: [],
};
