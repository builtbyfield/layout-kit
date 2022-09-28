# Tailwind Layout
 
A Tailwind CSS plugin that provides a composable API of variables and classes to
structure robust layout designs for websites.

## Installation

NOT ON NPM YET

```zsh
yarn add -D tailwind-layout
```

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require('tailwind-layout')({
      // ...
    }),
    // ...
  ],
}
```

## Usage

## Configuration

```js
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      xs: "0",
      sm: "544px",
      md: "650px",
      lg: "990px",
      xl: "1300px",
      xxl: "1520px",
    },
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require("tailwind-layout")({
      container: {
        xs: "100%",
        sm: "100%",
        md: "100%",
        lg: "64rem",
        xl: "64rem",
        xxl: "64rem",
      },
      margins: {
        xs: "1.25rem",
        sm: "1.25rem",
        md: "2rem",
        lg: "3rem",
        xl: "4rem",
        xxl: "4rem",
      },
      columns: {
        xs: 4,
        sm: 4,
        md: 8,
        lg: 12,
        xl: 12,
        xxl: 12,
      },
      gutters: {
        xs: "1rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "2rem",
        xxl: "2rem",
      },
    }),
  ],
};
```