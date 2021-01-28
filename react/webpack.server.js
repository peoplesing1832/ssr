const path = require("path");
// note: node项目在服务器会下载node_modules, 所以本身不需要把node_modules进行打包
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',

  entry: './server/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
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
