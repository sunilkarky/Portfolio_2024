// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js,jsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 5px 5px 5px rgba(13, 110, 253, 0.2)',
      },
      animation: {
        'blob': 'blob 5s ease-in-out infinite',
      },
      width: {
        '200': '200px',
        '340': '340px',
      },
      height: {
        '200': '200px',
        '340': '340px',
      },
    }
  },
  variants: {},
  plugins: [],
}

