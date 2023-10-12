module.exports = {
  plugins: [require("preline/plugin")],
  content: ["./src/**/*.{html,js,svelte,ts}", "node_modules/preline/dist/*.js"],
  darkMode: "media",
  theme: {
    extend: {},
  },
};
