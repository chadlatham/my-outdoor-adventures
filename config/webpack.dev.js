var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var helpers = require('./helpers');
var webpack = require('webpack');

module.exports = {
  entry: {
    // 'polyfills': './src/polyfills.ts',
    // 'vendor': './src/vendor.ts',
    // 'app': './src/main.ts'

    // 'polyfills': ['./src/polyfills.ts', 'webpack/hot/dev-server',    'webpack-hot-middleware/client'],
    // 'vendor': ['./src/vendor.ts', 'webpack/hot/dev-server',    'webpack-hot-middleware/client'],
    // 'app': ['./src/main.ts', 'webpack/hot/dev-server',    'webpack-hot-middleware/client']

    'polyfills': ['./src/polyfills.ts', 'webpack-hot-middleware/client'],
    'vendor': ['./src/vendor.ts', 'webpack-hot-middleware/client'],
    'app': ['./src/main.ts', 'webpack-hot-middleware/client']
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['ts', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico|jpg)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw'
      }
    ]
  },

  devtool: 'cheap-module-eval-source-map',

  output: {
    path: '/',
    publicPath: 'http://localhost:3000/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'app', 'polyfills']
    })
  ]
};
