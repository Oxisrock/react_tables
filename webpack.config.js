var debug = process.env.NODE_ENV !== "production";
var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./app/src/app.js",// a donde esta el main de la app
  module:
  {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude:/(node_modules|bower_components)/,
        loader:'babel-loader',
        query:
        {
          presets: ['react','es2015','stage-0'],
          plugins: ['react-html-attrs','transform-class-properties', 'transform-decorators-legacy'],
        }
      }
    ]
  },
  output: {
    path: path.join(__dirname , "/app/js"),
    filename: "app.min.js",
    publicPath: "/js/"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
