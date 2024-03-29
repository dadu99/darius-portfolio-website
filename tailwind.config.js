/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      zIndex: {
        100: "100",
        105: "105",
      },
    },
  },
  plugins: [],
};
