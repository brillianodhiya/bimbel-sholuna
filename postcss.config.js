module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-flexbugs-fixes": {},
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
      features: {
        "custom-properties": false,
      },
    },
    // "@fullhuman/postcss-purgecss": {
    //   content: [
    //     // "./components/**/*.{js,ts,jsx,tsx,mdx}",
    //     // "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    //     // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    //     // "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    //     // "./node_modules/preline/preline.js",
    //   ],
    //   safelist: {
    //     standard: [/^bg-/, /^text-/],
    //     deep: [/^bg-/, /^text-/],
    //   },
    // },
  },
};
