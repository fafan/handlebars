var webpack = require('webpack');
var path = require('path');
var extract = require('extract-text-webpack-plugin');
var cssextract = new extract('bundle.css');

var SRC_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'build');

var config = {
  entry: {
    'bundle': [
      SRC_DIR + '/app/index.js'
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
    chunkFilename: '[id].js'
  },
  jshint: {
    esversion: 5,
    camelcase: true,
    asi: true,
    failOnHint: true
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        include: /(src\/app|src\/include)/,
        loader: 'jshint-loader'
      }
    ],
    loaders: [
      {
        test: /(\.html)$/,
        loader: 'file-loader?name=[name].[ext]!extract-loader!html-loader'
      },
      {
        test: /\.handlebars$/,
        loader: 'handlebars'
      },
      {
        test:   /\.css$/,
        loader: cssextract.extract('style-loader', '!css-loader?name=css/[name].[ext]')
      },
      {
        test:   /(\/theme\/js\/|\/src\/lib\/)(.*)\.js$/,
        loader: 'script?name=[name].[ext]'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        test: /\.(gif|jpeg|jpg|png)$/,
        loader: 'file-loader?name=images/[name].[ext]'
      },
      {
        test: /\.ico$/,
        loader: 'file-loader?name=[name].[ext]'
      }
    ]
  },
  plugins: [
    new (require('webpack-cleanup-plugin'))({
      preview: true
    }),
    cssextract
  ]
};

module.exports = config;
