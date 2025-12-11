/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",      // ✅ Correct path
    "./components/**/*.{js,ts,jsx,tsx}", // ✅ Components too
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
