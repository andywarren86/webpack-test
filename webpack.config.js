const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./main.js",
  output: {
    filename: "build.js",
    publicPath: "/"
  },
  plugins: [new HtmlWebpackPlugin()],
  devServer: {
    open: true,
    historyApiFallback: true
  }
};
