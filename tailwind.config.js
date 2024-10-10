/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        none: "none",
        sm: "4px",
        DEFAULT: "10px",
        md: "15px",
        lg: "20px",
        xl: "30px",
        "2xl": "40px",
      },
      width: {
        "150px": "150px",
        "250px": "250px",
      },
      colors: {
        secondary: "#f53838",
        statBg: "#FFECEC",
        layerBlur: "#ededee",
        cardBorder: "#DDDDDD",
        checkColor: "#2FAB73",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  variant: {
  },
  plugins: [
  ],
};
