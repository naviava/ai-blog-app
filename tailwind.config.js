/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#F2F2F2",
          2: "#E5E5E5",
          3: "#D9D9D9",
          4: "#CCCCCC",
          5: "#BFBFBF",
        },
      },
    },
  },
  plugins: [],
};
