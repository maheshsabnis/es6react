const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./main.js",
  output: {
    path: path.resolve(__dirname, "dest"),
    filename: "index.js"
  },
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    // contentBase: "./dest",
    inline: true,
    port: 9010
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel",

        query: {
          presets: ["es2015", "react"]
        }
      },
      ,
      {
        test: /\.css?$/,
        loader:
          "style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]"
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      }
    ]
  }
};
