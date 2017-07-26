path = require("path");

module.exports = {
  entry: "./src/js/react-color-tools",
  output: {
    filename: "./dist/react-color-tools.js",
    libraryTarget: 'umd',
    library: 'ColorTools',
    auxiliaryComment: "istanbul ignore next"
  },

  module: {
    loaders: [{
      test: /\.(es6)|(jsx)$/,
      include: [
        path.resolve(__dirname, "src/js/")
      ],
      loader: 'babel-loader'
    }]
  },

  resolve: {
    extensions: ['', '.js', '.es6', '.jsx']
  }
};