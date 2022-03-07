const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
      index: './src/index.js',
      home: './src/home.js',
      menu: './src/menu.js',
      contact: './src/contact.js',
  },
  devServer: {
      static: './dist'
  },
  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
