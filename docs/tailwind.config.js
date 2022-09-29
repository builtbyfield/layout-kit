const {
  gray,
  red,
  blue,
  green,
  yellow,
  redDark,
  blueDark,
  greenDark,
  yellowDark,
  grayDark,
} = require("@radix-ui/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

const radixColorToTwColorScale = (color) => {
  return Object.entries(color).reduce(
    (acc, [, value], index) => ({
      ...acc,
      [index + 1]: value,
    }),
    {}
  );
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,md,mdoc}",
    "./markdoc/**/*.{js,ts,jsx,tsx,md,mdoc}",
    "./pages/**/*.{js,ts,jsx,tsx,md,mdoc}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      mono: ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
    },
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require("@tailwindcss-layout/plugin")({
      container: {
        sm: "100%",
        md: "100%",
        lg: "1200px",
        xl: "1200px",
        "2xl": "1200px",
      },
      margins: {
        sm: "1.25rem",
        md: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "4rem",
      },
      columns: {
        sm: 4,
        md: 8,
        lg: 12,
        xl: 12,
        "2xl": 12,
      },
      gutters: {
        sm: "1rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "2rem",
      },
    }),
    require("tailwindcss-themer")({
      defaultTheme: {
        extend: {
          colors: {
            black: "#000",
            white: "#fff",
          },
        },
      },
      themes: [
        {
          name: "theme-light",
          extend: {
            colors: {
              gray: radixColorToTwColorScale(gray),
              red: radixColorToTwColorScale(red),
              blue: radixColorToTwColorScale(blue),
              green: radixColorToTwColorScale(green),
              yellow: radixColorToTwColorScale(yellow),
            },
          },
        },
        {
          name: "theme-dark",
          extend: {
            colors: {
              gray: radixColorToTwColorScale(grayDark),
              red: radixColorToTwColorScale(redDark),
              blue: radixColorToTwColorScale(blueDark),
              green: radixColorToTwColorScale(greenDark),
              yellow: radixColorToTwColorScale(yellowDark),
            },
          },
        },
      ],
    }),
  ],
};
