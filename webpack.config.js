const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
      index: './src/index.js',
      initialize: './src/initialize.js',
  },
  devServer: {
      static: './dist'
  },
  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
