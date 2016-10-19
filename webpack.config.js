var HtmlWebpackPlugin = require('html-webpack-plugin')
  , webpack = require('webpack')
  , path = require('path')
  , precss = require('precss')
  , postcssUrl = require('postcss-url')
  , autoprefixer = require('autoprefixer')
  , postcssImport = require('postcss-import')
  , ifProduction = process.env.NODE_ENV == 'production'

module.exports = {
  entry: ['babel-polyfill', './app/index.js'],
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    alias: {
      app: path.resolve(__dirname, 'app'),
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
      sinon: path.resolve('./node_modules/sinon/pkg/sinon.js'),
    }
  },
  externals: {
    'cheerio': 'window',
    'react/addons': true, // important!!
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  devServer: {
    inline: true,
    port: 3333,
    historyApiFallback: true,
    progress: true,
    hot: true,
    stats: 'errors-only'
  },
  devtool: ifProduction ? 'cheap-module-source-map' : 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.jsx|\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss', 'sass'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=80000',
        include: path.resolve(__dirname, 'app', 'assets'),
      },
      {
        test: /sinon\/pkg\/sinon\.js/,
        loader: 'imports?define=>false,require=>false',
      },
    ]
  },

  postcss: function (webpack) {
    return [autoprefixer, precss, postcssImport({addDependencyTo: webpack}), postcssUrl({})]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'app', 'index.html'),
      inject: false
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
