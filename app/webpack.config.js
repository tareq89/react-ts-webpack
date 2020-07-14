const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const { HotModuleReplacementPlugin } = require("webpack")
const StylelintPlugin = require("stylelint-webpack-plugin")
const Dotenv = require("dotenv-webpack")

module.exports = {
  target: "web",
  mode: "development",
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  },
  entry: {
    app: "./src/index.tsx"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          formatter: require("eslint-friendly-formatter"),
          parser: "@typescript-eslint/parser",
          extends: ["plugin:@typescript-eslint/recommended"],
          plugins: ["@typescript-eslint"],
          failOnError: false,
          failOnWarning: false,
          emitError: true,
          emitWarning: true,
          env: {
            browser: true,
            node: true
          }
        }
      },
      {
        test: /\.tsx?/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              localsConvention: "asIs"
            }
          },
          {
            loader: "sass-loader",
            options: {
              additionalData: "@import './src/sass/global';", // it can be a function to load sass data from environment
              implementation: require("node-sass"),
              sourceMap: true,
              sassOptions: {
                indentWidth: 2,
                outputStyle: "compressed"
              }
            }
          }
        ],
        exclude: path.resolve(__dirname, "src/sass/global/*")
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html"
    }),
    new Dotenv(),
    new HotModuleReplacementPlugin(),
    new StylelintPlugin()
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src")
    },
    extensions: [".ts", ".tsx", ".js"]
  },
  devServer: {
    contentBase: "./",
    port: 8080
  }
}
