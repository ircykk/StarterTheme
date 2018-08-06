const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: [
    './js/theme.js',
    './css/theme.scss',
  ],
  output: {
    filename: 'theme.js',
    // output for js
    path: path.resolve(__dirname, '../assets/js')
  },
  module: {
    rules: [{
      test: /\.s?css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        'sass-loader',
      ]
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /.(png|svg|woff(2)?|eot|ttf|svg|jpg)(\?[a-z0-9=\.]+)?$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: '../css/'
      }
    }]
  },
  devtool: 'inline-source-map',
  plugins: [
    new MiniCssExtractPlugin({
      // output for css
      filename: '../css/theme.css'
    })
  ]
};