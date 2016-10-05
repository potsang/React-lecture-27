module.exports = {
  entry: [
    "./src/index.jsx"
  ],
  output: {
    filename: "./bundle.js"
  },
  module: {
    loaders: [{
      exclude: /mode_modules/,
      loader: "babel",
      query: {compact: false}
    }]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
}
