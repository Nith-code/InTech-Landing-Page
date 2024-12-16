/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        goldenrod: "#f5b650",
        "white-font": "#f5f7f8",
        paleturquoise: "#bdfffd",
        black: "#000",
        oldlace: "#fff7e9",
        gainsboro: "rgba(217, 217, 217, 0.25)",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "7xl": "26px",
        "8xs": "5px",
        "3xs": "10px",
      },
    },
    fontSize: {
      sm: "14px",
      "17xl": "36px",
      "10xl": "29px",
      "3xl": "22px",
      xs: "12px",
      "13xl": "32px",
      "29xl": "48px",
      "19xl": "38px",
      base: "16px",
      "3xs": "10px",
      inherit: "inherit",
    },
    screens: {
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
