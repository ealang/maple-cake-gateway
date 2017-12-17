// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

let webpackConfig = require('./config/webpack.config.dev')

module.exports = function (config) {
  config.set({
    basePath: 'src',
    frameworks: ['jasmine'],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    preprocessors: {
      '*': ['webpack'],
    },
    files: [
      {pattern: 'test.js', watched: false}
    ],
    webpack: webpackConfig,
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [],
    singleRun: false
  });
};
