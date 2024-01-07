/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream-web': '#E1B171',
        'orange-web': '#EF713F', // Perbaikan: Hapus hash ekstra
        'coklat-web': '#5C4534',
        'coklat-tulisan-hero-web': '#654E3E',
        'coklat-tulisan-button-web': '#17120E',
        'coklat-skill-web': '#2F251D',
        'coklat-footer1-web': '#17120E',
        'coklat-footer2-web': '#A27754',
        'bg-web': '#F3F2ED',
        'tulisan-navbar': '#67655F',
        'coklat-home': '#654E3E',
        'lebih-detail': '#F4F3F1',
        'gradasi-orange-pendidikan': 'linear-gradient(0deg, #EF713F 0%, #EF713F 100%), linear-gradient(92deg, #654E3E 5.38%, #896B56 92.66%)', // Perbaikan: Hapus karakter '#' ekstra
      },
    },
  },
  plugins: [],
}