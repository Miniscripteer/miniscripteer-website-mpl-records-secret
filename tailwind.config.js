/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0E",
        panel: "#131318",
        line: "#242430",
        amber: "#FFB000",
        cyan: "#5EEAD4",
        fog: "#9A9AA8",
      },
      fontFamily: {
        mono: ["'Space Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["'Inter'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        scanlines:
          "repeating-linear-gradient(to bottom, rgba(255,255,255,0.035) 0px, rgba(255,255,255,0.035) 1px, transparent 1px, transparent 3px)",
      },
    },
  },
  plugins: [],
};
