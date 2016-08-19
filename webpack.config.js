const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_PATH = path.resolve('./app');
const DIST_PATH = path.resolve('./dist');
const TEMPLATE_PATH = path.resolve(APP_PATH, 'index.html');
const STYLE_PATH = path.resolve(APP_PATH, 'styles/index.scss');

module.exports = {
  entry: {
    app: APP_PATH,
    style: STYLE_PATH
  },

  output: {
    path: DIST_PATH,
    filename: '[name].js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [APP_PATH]
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel']
      },
      {
        test: /\.css$/, exclude: /node_modules/, loaders: ['style', 'css']
      },
      {
        test: /\.scss$/, exclude: /node_modules/, loaders: ['style', 'css', 'sass']
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: TEMPLATE_PATH
    })
  ],

  devServer: {
    inline: true,
    hot: true,
    historyApiFallback: true
  }
}
