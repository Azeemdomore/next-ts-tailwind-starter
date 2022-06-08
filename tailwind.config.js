module.exports = {
  content: ["./components/**/*.{tsx,js,ts}", "./pages/**/*.{tsx,js,ts}"],
  theme: {
    debugScreens: {
      position: ["bottom", "right"],
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: { monts: ["Montserrat", "sans-serif"] },
      colors: {
        bgBody: "#F3F5FD",
        primary: "#2960FF",
        gradient: "#4f71c6",
        btnYellow: "#FFD34E",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-debug-screens"),
  ],
};
