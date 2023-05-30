/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cod-gray': {
          '50': '#f7f7f7',
          '100': '#e3e3e3',
          '200': '#c8c8c8',
          '300': '#a4a4a4',
          '400': '#818181',
          '500': '#666666',
          '600': '#515151',
          '700': '#434343',
          '800': '#383838',
          '900': '#313131',
          '950': '#0e0e0e',
        },

        "app": {
          "bg": '#0e0e0e',
          "alter-bg": "#313131",
          "text": "#f7f7f7",
          "text-alter": "#a4a4a4"
        },
      },

      keyframes: {
        "top-in": {
          "0%": { opacity: "0", transform: "translate(0, -20px)" },
          "100%": { opacity: "1" },
        },
      }
    },
  },
  plugins: [],
}
