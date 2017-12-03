let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

let paths = {
  srcDir: path.resolve('src'),
  indexHtml: path.resolve('public/index.html')
};

module.exports = {
  entry: "./src/main.js",
  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        include: paths.srcDir,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        include: paths.srcDir,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          cacheDirectory: true
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: paths.indexHtml
  })],
};
