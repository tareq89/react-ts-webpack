const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
        test: /\.s[ac]ss$/i,
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
              // sourceMap: true,
              sassOptions: {
                indentWidth: 4,
                // includePaths: ['./sass/*'],
                // outputStyle: 'compressed'
              }
            }
          },
        ]
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     'style-loader',
      //     'css-loader',
      //     // {
      //     //   loader: 'css-loader',
      //     //   options: {
      //     //     modules: true,
      //     //     localsConvention: 'asIs'
      //     //   }
      //     // }
      //   ]
      // }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      excludeChunks: [ 'bundle' ]
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devServer: {
    contentBase: './',
    port: 8080
  }
}