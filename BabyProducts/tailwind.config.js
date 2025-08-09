// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        lightblue: "#B0E4F4",
        darkblue: "#00B4D8",
      },
    },
  },
  plugins: [],
};
