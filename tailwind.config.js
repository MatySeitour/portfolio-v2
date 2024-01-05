/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-title": "linear-gradient(to bottom, #ddd 30%, #fff 60%, #444);",
        "gradient-nav": "linear-gradient(45deg, #222, transparent);",
        "gradient-blue": "linear-gradient(0deg, #02f5 , transparent, transparent);",
        "gradient-purple": "linear-gradient(0deg, #a0f5 , transparent, transparent);",
        "gradient-orange": "linear-gradient(0deg, #f848 , transparent, transparent);",
        "gradient-orange-blur": "linear-gradient(#f848 30%, #f848);",
        "gradient-purple-blur": "linear-gradient(#a0f8 30%, #a0f5);",
        "gradient-blue-blur": "linear-gradient(#02f8 30%, #02f5);"
      },

    },
  },
  plugins: [],
}
