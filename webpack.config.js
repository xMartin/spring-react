module.exports = {
  entry: './src/main/resources/js/client.js',
  output: {
    filename: './src/main/resources/static/client.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  }
};
