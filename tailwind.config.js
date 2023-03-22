/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "overlay-30": "rgba(0,0,0,0.3)",
        "overlay-53": "rgba(0, 0, 0, 0.53)",
      },
    },
  },
  plugins: [],
};
