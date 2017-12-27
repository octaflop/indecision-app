const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),  // needs to be absolute
    filename: 'bundle.js'
  }
};
