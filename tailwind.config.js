/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./sections/**/*.liquid",
    "./snippets/**/*.liquid",
    "./layout/**/*.liquid",
    "./components/**/*.svelte",
  ],
  theme: {
    extend: {
      colors: {
        'base-100': 'var(--color-base-100)',
        'content': 'var(--color-content)',
      }
    },
  },
  plugins: [],
}

