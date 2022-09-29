# Tailwind CSS Layout
 
A Tailwind CSS plugin that provides a composable API of variables and classes to
structure robust layout designs for websites.

## Getting started

### Installation

NOT ON NPM YET

Install `tailwindcss-layout` using [`yarn`](https://yarnpkg.com/):

```bash
yarn add -D tailwindcss-layout
```

Or [`npm`](https://www.npmjs.com/):

```bash
npm install --save-dev tailwindcss-layout
```

Or [`pnpm`](https://pnpm.io/):

```bash
pnpm add -D tailwindcss-layout
```

### Add the plugin

Then add the plugin to your `tailwind.config.js` file, and **disable the `container` core plugin** to avoid conflicts with the native `container` utility included in Tailwind CSS:

```js
// tailwind.config.js
module.exports = {
  content: [
    // ...
  ],
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

### Configure your layout

Pass the plugin a config object representing your layout configuration.

```js
// tailwind.config.js
module.exports = {
  content: [
    // ...
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require('tailwind-layout')({
      container: {
        'sm': '100%',
        'md': '100%',
        'lg': '1200px',
        'xl': '1200px',
        '2xl': '1200px',
      },
      margins: {
        'sm': '1.25rem',
        'md': '2rem',
        'lg': '3rem',
        'xl': '4rem',
        '2xl': '4rem',
      },
      columns: {
        'sm': 4,
        'md': 8,
        'lg': 12,
        'xl': 12,
        '2xl': 12,
      },
      gutters: {
        'sm': '1rem',
        'md': '1.5rem',
        'lg': '2rem',
        'xl': '2rem',
        '2xl': '2rem',
      },
    }),
  ],
};
```

## Usage

```html
<!-- This example uses pure HTML for demonstration purposes -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- ... -->
  </head>
  <body>
    <!-- A container with a maximum width with margins (as configured) -->
    <div class="container">
      <div class="cols-container">
        <!-- Two columns that each fill 50% of the container -->
        <div class="w-1/2-cols">Col</div>
        <div class="w-1/2-cols">Col</div>
      </div>
      <div class="cols-container">
        <!-- Three columns that fill `w-[x]-cols` number of columns each -->
        <div class="w-6-cols">Col</div>
        <div class="w-3-cols">Col</div>
        <div class="w-3-cols">Col</div>
      </div>
    </div>
  </body>
</html>
```
