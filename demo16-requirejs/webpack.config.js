const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [' ', '.js', '.css'],
    modules: [path.join(__dirname, 'js/')],
    alias: {
      M1: path.join(__dirname, 'js/M1'),
      M2: path.join(__dirname, 'js/M2'),
      M3: path.join(__dirname, 'js/M3')
    },
  }
};
