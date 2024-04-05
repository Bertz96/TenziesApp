/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        tenzies: "#0B2434",
        tenziesWhite: "#F5F5F5",
        tenziesRoll: "#5035FF",
        tenziesSelected: "#59E391",
      },
      textColor: {
        tenzies: "#2B283A",
      },
    },
  },
  plugins: [],
};
