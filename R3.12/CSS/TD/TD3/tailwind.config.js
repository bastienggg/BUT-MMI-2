/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'bg-color': 'hsl(var(--clr-bg) / <alpha-value>)',
        'bg-color2': 'hsl(var(--clr-bg2) / <alpha-value>)',
        'text-color': 'hsl(var(--clr-text) / <alpha-value>)',
      },
    },
    plugins: [],
  }
}
