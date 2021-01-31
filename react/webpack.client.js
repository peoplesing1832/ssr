const path = require('path');

const { resolve } = path;

module.exports = {
  mode: 'production',

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

  module: {
    rules: [
      {
        test: /.js|jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
