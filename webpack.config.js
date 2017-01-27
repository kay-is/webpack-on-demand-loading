const path = require('path')

module.exports = {

  entry:  './src/index.js',

  output: {
    filename: 'application.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/',
  },

}