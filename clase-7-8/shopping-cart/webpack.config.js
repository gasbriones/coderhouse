const path = require('path');
const webpack = require('webpack');
const WebpackBuildNotifier = require('webpack-build-notifier');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: isProduction ? 'hidden-source-map' : 'inline-source-map',
  entry: {
    main: './static/js/apps/controller.jsx'
  },
  output: {
    path: path.join(__dirname, 'static', 'js'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015','react','stage-0']
      }
    }]
  },
  resolve : {
    extensions: ['.js', '.json', '.jsx']
  },
  plugins: [
    new WebpackBuildNotifier()
  ]
};
