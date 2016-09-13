var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackStats = require('webpack-stats-plugin').StatsWriterPlugin;

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
    // 'polyfills': ['./src/polyfills.ts', 'webpack/hot/dev-server', 'webpack-hot-middleware/client?http://0.0.0.0:3000'],
    // 'vendor': ['./src/vendor.ts', 'webpack/hot/dev-server', 'webpack-hot-middleware/client?http://0.0.0.0:3000'],
    // 'app': ['./src/main.ts', 'webpack/hot/dev-server', 'webpack-hot-middleware/client?http://0.0.0.0:3000']
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
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
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
    // path: helpers.root('dist'),
    // publicPath: 'http://localhost:8080/',
    // publicPath: 'http://localhost:3000/dist/',
    publicPath: 'http://localhost:3000/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin()
    // new webpack.ResolverPlugin(new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'], new webpackStats('webpack.json')))
  ]

  // devServer: {
  //   historyApiFallback: true,
  //   stats: 'minimal'
  // }
};
