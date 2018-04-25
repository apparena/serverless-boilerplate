const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const slsw = require('serverless-webpack');

module.exports = {
  devtool: 'source-map',
  mode: 'development',
  entry: slsw.lib.entries,
  target: 'node',
  module: {
    rules: [
      {
        test: /\.json/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [new CopyWebpackPlugin([{ from: '.env' }])],
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  externals: [nodeExternals()],
};
