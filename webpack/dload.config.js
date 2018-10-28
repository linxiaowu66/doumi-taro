/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
// const strip = require('strip-loader');

const projectRootPath = path.resolve(__dirname, '../');
// const assetsPath = path.resolve(projectRootPath, './Dload');
// const assetsPath = path.resolve(projectRootPath, './build/dist');
const config = require('../config');
const pkg = require('../package.json');

// https://github.com/halt-hammerzeit/webpack-isomorphic-tools
// const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
// const webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools'));

// let ENV = process.env.NODE_ENV === 'production' ? 'prod' : process.env.NODE_ENV;
// const RUN_ENV = process.env.RUN_ENV
const assetsPath = path.resolve(projectRootPath, './Dload');

module.exports = {
  // devtool: 'source-map',
  context: path.resolve(__dirname, '..'),
  entry: {
    Dload: ['./Dload/index.js'],
  },
  output: {
    path: assetsPath,
    filename: '[name].min.js'
  },
  // module: {
  //   loaders: [
  //     { test: /\.jsx?$/, exclude: /node_modules/, use: [strip.loader('debug'), 'babel-loader'] },
  //   ],
  // },
  // resolve: {
  //   modules: [path.resolve(__dirname, '../src'), 'node_modules'],
  //   extensions: ['.json', '.js', '.jsx']
  // },
  plugins: [
    // ignore dev config
    new webpack.IgnorePlugin(/\.\/dev/, /\/config$/),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"' + process.env.NODE_ENV + '"',
      }
    }),
    // optimizations
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //   },
    // })
  ],
};
/* eslint-enable */
