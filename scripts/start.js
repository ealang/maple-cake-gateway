let DEV_PORT = process.env.PORT || 8080;
let DEV_HOST = process.env.HOST || 'localhost';

let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');

function runDevServer(host, port) {
  let config = require('../config/webpack.config');
  let compiler = webpack(config);
  let devServer = new WebpackDevServer(compiler, {
    // Enable gzip compression of generated files.
    compress: true,
    // By default WebpackDevServer serves physical files from current directory
    // in addition to all the virtual build products that it serves from memory.
    // This is confusing because those files won’t automatically be available in
    // production build folder unless we copy them. However, copying the whole
    // project directory is dangerous because we may expose sensitive files.
    // Instead, we establish a convention that only files in `public` directory
    // get served. Our build script will copy `public` into the `build` folder.
    contentBase: 'public',
    // Enable hot reloading server. It will provide /sockjs-node/ endpoint
    // for the WebpackDevServer client so it can learn when the files were
    // updated. The WebpackDevServer client is included as an entry point
    // in the Webpack development configuration. Note that only changes
    // to CSS are currently hot reloaded. JS changes will refresh the browser.
    hot: true,
    // It is important to tell WebpackDevServer to use the same "root" path
    // as we specified in the config. In development, we always serve from /.
    publicPath: config.output.publicPath,
    // Reportedly, this avoids CPU overload on some systems.
    // https://github.com/facebookincubator/create-react-app/issues/293
    watchOptions: {
      ignored: /node_modules/
    },
    https: false,
    host: host,
    stats: {
      colors: true
    }
  });

  devServer.listen(port, (err, result) => {
    if (err) {
      return console.log(err);
    }

    console.log('Starting the development server...');
    console.log();
  });
}

runDevServer(DEV_HOST, DEV_PORT);
