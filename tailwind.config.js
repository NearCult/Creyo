/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background, #ffffff)", // Fallback to white
        foreground: "var(--foreground, #000000)", // Fallback to black
      },
      keyframes: {
        gradient: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      animation: {
        gradient: 'gradient 30s linear infinite', // Adjust timing as needed
      },
      backgroundSize: {
        '400%': '400%',
      },
    },
  },
  plugins: [
    // Example plugins
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
};
