const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

let config = {
  entry: path.join(__dirname, 'index.js'),
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader"},
          { loader: "css-loader"},
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              outputStyle: "expanded",
              includePaths: [path.resolve(__dirname, 'client/styles')]
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "www/index.template.html"),
      filename: path.resolve(__dirname, "www/index.html")
    })
  ]
}

module.exports = (env, argv) => {

  if (argv.mode === 'development') {
    config.devtool = 'cheap-source-map'
  }

  return config;
};
