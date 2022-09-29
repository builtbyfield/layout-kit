const withMarkdoc = require("@markdoc/next.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["md", "mdoc", "js", "jsx", "ts", "tsx"],
};

module.exports = withMarkdoc()(nextConfig);
