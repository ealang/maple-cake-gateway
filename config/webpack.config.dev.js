let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');

let resolve = (part) => path.resolve(__dirname, '..', part)

let paths = {
  srcDir: resolve('./src'),
  indexHtml: resolve('./src/main.html')
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
        include: resolve('./src/app'),
        test: /\.less$/,
        use: [
          { loader: 'raw-loader' },
          { loader: 'less-loader' }
        ]
      },
      {
        exclude: resolve('./src/app'),
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'raw-loader' },
          { loader: 'less-loader' }
        ]
      },
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
      },
      { test: /\.html$/, loader: 'raw-loader' }
    ]
  },
  plugins: [
    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      /@angular(\\|\/)core/,
      resolve('./src'),
      {}
    ),
    new HtmlWebpackPlugin({
      template: paths.indexHtml
    })
  ],
};
