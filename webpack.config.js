const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    compress: true,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Restaurant Page",
      template: "./src/index.html",
    }),
  ],
  mode: "production",
  module: {
    rules: [
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: "asset/resource" },
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
    ],
  },
  optimization: {
    runtimeChunk: "single",
  },
  devtool: "source-map",
};
