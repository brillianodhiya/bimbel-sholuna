/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 60,
  },
};

module.exports = withBundleAnalyzer(nextConfig);
