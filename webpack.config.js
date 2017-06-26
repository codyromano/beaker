const path = require('path');
const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'src/public/js/'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
    // TODO: Implement eslint-loader
    /*
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
    */
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: 'Your_mom_loves_my_[name]' +
                '__[local]--[hash:base64:5]'
            }
          }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2017']
        }
      }
    ]
  },
  plugins: [
    new FlowBabelWebpackPlugin(),
  ]
};