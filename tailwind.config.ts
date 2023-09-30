module.exports = {
  content: ['./components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}', './content/**/*.{md,mdx}'],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
}
