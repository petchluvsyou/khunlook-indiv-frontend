import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'line-seed-sans': ['"LINE Seed Sans TH"', 'sans-serif'],
      },
      colors: {
        'Bg': '#F8F8F8',
        'White-100': '#FFFFFF',
        'Dark': '#474554',
        'Grey': '#818181',
        'Yellow': '#D49D44',
        'Green': '#486708',
        'DarkRed': '#C36277',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
],
};
export default config;
