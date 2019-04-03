var path              = require('path')
var webpack           = require('webpack')
var autoprefixer      = require('autoprefixer')
var CopyWebpackPlugin = require('copy-webpack-plugin')

var appConfig = {
  project_name:     process.env.PROJECT_NAME     || 'clapping-ape',
  node_env:         process.env.NODE_ENV         || 'development',
  base_url:         process.env.BASE_URL         || 'http://localhost:3001',
}

var postcssLoaderOptions = {
  plugins: function() {
    return [autoprefixer]
  }
}

var config = {
  mode: 'none',
  entry: {},
  output: {
    path: path.join(__dirname, '..', 'public'),
    filename: (appConfig.node_env === 'production' ? 'javascripts/[name]-[hash].js' : 'javascripts/[name].js'),
    sourceMapFilename: (appConfig.node_env === 'production' ? 'javascripts/[name]-[hash].js.map' : 'javascripts/[name].js.map'),
  },
  cache: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory'],
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        use: ['babel-loader?cacheDirectory'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader', options: postcssLoaderOptions }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader', options: postcssLoaderOptions },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: ['url-loader?limit=1000']
      },
      {
        test: /\.json$/,
        use: ['json-loader']
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(eot|ttf|woff2?)$/,
        use: ['file-loader']
      },
      {
        test: /\.yml$/,
        use: ['yml-loader']
      },
      {
        test: /\.svg$/,
        loader: 'raw-loader',
      },
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, '..', 'app'),
      path.join(__dirname, '..'),
      'node_modules'
    ],
    extensions: ['.jsx', '.js']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(appConfig.node_env),
        APP_CONFIG: JSON.stringify(appConfig)
      },
    }),
    new webpack.ProvidePlugin({ React: 'react' }),
    new CopyWebpackPlugin([
      { from: `app/assets/images/favicon-${appConfig.project_name}.png`, to: 'favicon.png' },
    ])
  ],
  devtool: process.env.DEVTOOL || 'cheap-module-eval-source-map'
}

module.exports = config
