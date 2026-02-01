/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a3c5e",
        "primary-dark": "#0f2340",
        accent: "#e67e22",
        "accent-hover": "#d35400",
        light: "#f0f4f8",
        dark: "#1a1a2e",
      },
      fontFamily: {
        sans: ["Segoe UI", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
