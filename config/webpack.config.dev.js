let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');

let resolve = (part) => path.resolve(__dirname, '..', part)

let paths = {
  srcDir: resolve('./src'),
  indexHtml: resolve('./src/index.html')
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
        test: /\.less$/,
        include: resolve('./src/app'),
        use: [
          { loader: 'raw-loader' },
          { loader: 'less-loader' }
        ]
      },
      {
        include: paths.srcDir,
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
      {
        test: /\.html$/,
        include: paths.srcDir,
        loader: 'raw-loader'
      },
      {
        test: /\.json$/,
        include: paths.srcDir,
        loader: 'raw-loader'
      }
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
