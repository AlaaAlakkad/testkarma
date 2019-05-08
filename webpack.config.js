var webpack = require("webpack");
var path = require("path");

var BUILD_DIR = path.resolve(__dirname, "src/client/public");
var APP_DIR = path.resolve(__dirname, "src/client/app");
module.exports = {
  entry: APP_DIR + "/index.js",
  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:
            {
              loader: 'babel-loader',
              query: {
                presets: ['@babel/preset-env', '@babel/react']
              }
            }
      }
    ]
  },
  devtool: "nosources-source-map"

};


