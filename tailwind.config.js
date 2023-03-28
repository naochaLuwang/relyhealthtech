/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#2B2A45",
      secondary: "#4B4A62",
      backgroundColor: "#F1F0F9",
      logo: "#4E2F85",
      buttonColor: "#FFFFFF",
      borderhr: "#DCDAE3",
      greenBorder: "#71BD4A",
      lightGreen: "#92E3A9",
      card: "#3E2093",
      cardCorner: "#F8949E",
      cardCircles: "#7E53F9",
      textPrimary: "#4E2D82",
      textGreen: "#62BB46",
      bgPrimary: "#E6E0EC",
      textLight: "#9A9b9b",
      errorColor: "#FF0000",
      purple100: "#e1bee7",
      fuchsia400: "#ab47bc",
      brandColor: "#4e2d80",
      whatsNew: "#f52c05",
      testimonial: "#7a52a6",
    },
    extend: {
      backgroundImage: {
        hero: "url('/blur-hospital.jpg')",
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],
};
