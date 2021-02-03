const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const { resolve } = path;

module.exports = {
  mode: process.env.NODE_ENV,

  entry: resolve(__dirname, './client/hydrate.js'),

  resolve: {
    extensions: ['.js', '.jsx'],

    alias: {
      'client': resolve(__dirname, './client'),
      'server': resolve(__dirname, './server'),
      '@': resolve(__dirname, './'),
    },
  },

  output: {
    filename: 'hydrate.js',
    // 水合文件打包到public目录中
    path: resolve(__dirname, 'public'),
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
    ]
  },

  module: {
    rules: [
      {
        test: /.js|jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              esModule: false,
            }
          },
          'postcss-loader',
        ]
      },
    ],
  },
};
