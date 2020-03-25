const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "index.js",
  output: {
    path: __dirname + "/dist",
    filename: "index_bundle.js",
    title: "IoT Riego"
  },
  plugins: [new HtmlWebpackPlugin()]
};
