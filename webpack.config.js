const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require ('clean-webpack-plugin');

module.exports = {
  mode: "development",
  devtool: "none",
  entry: "./virtual-keyboard/src/scripts/index.js",
  output: {
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname, "./virtual-keyboard/deploy")
  },
  module: {
    rules: [{
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    }, ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./virtual-keyboard/src/template.html",
  } ),
  new CleanWebpackPlugin()]
}