/** @type {import('tailwindcss').Config} */

const { heroui } = require("@heroui/react")

const sizes = {
  128: "32rem", // (512px)
  100: "25rem", // (400px)
  144: "36rem", // (576px)
  160: "40rem", // (640px)
  192: "48rem", // (768px)
  256: "64rem" // (1024px)
}

const borderRadius = {
  "4xl": "2rem", // 32px
  "5xl": "2.5rem", // 40px
  "6xl": "3rem", // 48px
  "7xl": "3.5rem", // 56px
  "8xl": "4rem", // 64px
  "9xl": "4.5rem", // 72px
  "10xl": "5rem", // 80px
  pill: "9999px", // Super rounded / pill shape
  soft: "1.25rem" // Nice medium soft radius (20px)
}

module.exports = {
  theme: {
    extend: {
      borderRadius,
      width: sizes,
      minWidth: sizes,
      maxWidth: sizes,
      height: sizes,
      minHeight: sizes,
      maxHeight: sizes,

      colors: {
        "app-regal-gold": "#e1a140",
        "app-imperial-puce": "#532200",
        "app-opulent-sand": "#efcfa0",
        "app-majestic-ember": "#914110"
      },
      animation: {
        border: "border 4s linear infinite"
      },
      keyframes: {
        border: {
          to: { "--border-angle": "360deg" }
        }
      }
    }
  },
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  plugins: [
    heroui({
      defaultTheme: "dark",
      defaultExtendTheme: "dark"
    })
  ]
}
