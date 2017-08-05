path = require("path");

module.exports = {
  entry: "./src/js/collit",
  output: {
    filename: "./dist/collit.js",
    libraryTarget: 'umd',
    library: 'Collit',
    auxiliaryComment: "istanbul ignore next"
  },

  module: {
    loaders: [{
      test: /\.es6$/,
      include: [
        path.resolve(__dirname, "src/js/")
      ],
      loader: 'babel-loader'
    }]
  },

  resolve: {
    extensions: ['', '.js', '.es6']
  }
};