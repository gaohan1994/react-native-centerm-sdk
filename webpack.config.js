var path = require('path');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: "./index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('ts-loader'),
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  externals: {
    react: 'react',
    'react-native': 'react-native'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
};