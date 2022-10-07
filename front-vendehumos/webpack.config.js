const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const entryPath = path.join(__dirname, 'src'),
  outputPath = path.join(__dirname, 'dist');

module.exports = {
  mode: 'development',
  entry: path.join(entryPath, 'index.js'),
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(mp3|mp4)$/,
        exclude: /node_modules/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Curso de React',
      template: path.join(entryPath, 'index.html')
    })
  ],
  devServer: {
    static: outputPath,
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}