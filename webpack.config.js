path = require("path");

module.exports = {
  entry: "./src/collit",
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
        path.resolve(__dirname, "src/")
      ],
      loader: 'babel-loader'
    }]
  },

  resolve: {
    extensions: ['', '.js', '.es6']
  }
};