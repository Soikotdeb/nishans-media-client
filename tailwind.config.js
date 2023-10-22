/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e50000', // This is the primary color
        // Add other colors here if needed
      },
    },

  },
  plugins: [require("daisyui")],
}

