const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  target: 'web',
  mode: 'development',
  entry: {
    app: './src/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.sass$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localsConvention: 'asIs'
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('node-sass'),
              sourceMap: true,
              sassOptions: {
                indentWidth: 4,
                outputStyle: 'compressed'
              }
            }
          },
        ],
        exclude: path.resolve(__dirname, 'src/sass/global/*')
      },
      {
        test: /\.sass$/i,
        use: [
          'style-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('node-sass'),
              sourceMap: true,
              sassOptions: {
                indentWidth: 4,
                outputStyle: 'compressed'
              }
            }
          },
        ],
        include: path.resolve(__dirname, 'src/sass/global/*')
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html'
    }),
    new Dotenv()
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src')
    },
    extensions: ['.ts', '.tsx', '.js']
  },
  devServer: {
    contentBase: './',
    port: 8080
  }
}