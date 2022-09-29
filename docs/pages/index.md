---
title: A powerful, flexible, Tailwind CSS layout plugin
description: Tailwind CSS Layout is a powerful, flexible, Tailwind CSS layout plugin
---

# Get started with Tailwind CSS Layout

A Tailwind CSS plugin that provides a composable API of variables and classes to
structure robust layout designs for websites. {% class="text-xl text-gray-11" %}

## Installation

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

## Add the plugin

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
    require("tailwind-layout")({
      // ...
    }),
    // ...
  ],
};
```

## Configure your layout

Pass the plugin a config object representing your layout configuration.

```js
// tailwind.config.js
module.exports = {
  content: [
    // ...
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require("tailwind-layout")({
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
  ],
};
```

## Usage

This plugin creates classes to handle column layouts where `N` can be a number
of columns, up to the largest amount of columns defined or a fraction
(`1/2`, `1/3`, `1/4`, `2/3` or `3/4`).

{% grid %}
{% column width="w-1-cols" /%}
{% column width="w-2-cols" /%}
{% column width="w-3-cols" /%}
{% column width="w-4-cols" /%}
{% column width="w-5-cols" /%}
{% column width="w-6-cols" /%}
{% column width="w-7-cols" /%}
{% column width="w-8-cols" /%}
{% column width="w-9-cols" /%}
{% column width="w-10-cols" /%}
{% column width="w-11-cols" /%}
{% column width="w-12-cols" /%}
{% /grid %}

The following code would render the columns above:

```html
<!-- HTML shown for demonstrative purposes -->
<div class="w-1-cols"></div>
<div class="w-2-cols"></div>
<div class="w-3-cols"></div>
<div class="w-4-cols"></div>
<div class="w-5-cols"></div>
<div class="w-6-cols"></div>
<div class="w-7-cols"></div>
<div class="w-8-cols"></div>
<div class="w-9-cols"></div>
<div class="w-10-cols"></div>
<div class="w-11-cols"></div>
<div class="w-12-cols"></div>
```

As the plugin reads the config, it works out the maximum amount of columns it
needs - so if your smallest breakpoint has `4` design columns and the largest
has `12` - then it will create classes `.w-1-cols` through `.w-12-cols`.

## A heading

{% grid %}
{% column width="w-4-cols" %}
{% columns-container %}
{% column width="w-1-cols" /%}
{% column width="w-1-cols" /%}
{% column width="w-1-cols" /%}
{% column width="w-1-cols" /%}
{% /columns-container %}
{% /column %}
{% /grid %}

```html
<div class="w-1-cols"></div>
<div class="w-2-cols"></div>
<div class="w-3-cols"></div>
<div class="w-4-cols"></div>
<div class="w-5-cols"></div>
<div class="w-6-cols"></div>
<div class="w-7-cols"></div>
<div class="w-8-cols"></div>
<div class="w-9-cols"></div>
<div class="w-10-cols"></div>
<div class="w-11-cols"></div>
<div class="w-12-cols"></div>
```

As the plugin reads the config, it works out the maximum amount of columns it needs - so if your smallest breakpoint has 4 design columns and the largest has `12` - then it will create classes `.w-1-cols` through `.w-12-cols`.
