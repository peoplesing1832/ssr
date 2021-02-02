const path = require('path');
// note: node项目在服务器会下载node_modules, 所以本身不需要把node_modules进行打包
const nodeExternals = require('webpack-node-externals');

const { resolve } = path;

module.exports = {
  mode: 'development',

  entry: resolve(__dirname, './server/index.js'),

  resolve: {
    extensions: ['.js', '.jsx'],

    alias: {
      'client': resolve(__dirname, './client'),
      'server': resolve(__dirname, './server'),
      '@': resolve(__dirname, './'),
    },
  },

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'build'),
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
        use: ['isomorphic-style-loader', {
          loader: 'css-loader',
        }]
      },
    ],
  },

  externalsPresets: {
    node: true,
  },

  externals: [
    nodeExternals()
  ],
};
