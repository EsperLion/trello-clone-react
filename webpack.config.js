const path = require('path');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

  entry: {
    app: './src/index.tsx',
    pg: './playground/pg.tsx',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },

  devtool: 'source-map',

  devServer: {
    contentBase: path.join(__dirname, '/dist'),
    port: 9001,
    open: true,
  },

  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },

  module: {
    rules: [
      {
        test: /.*\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
          },
          {
            loader: 'tslint-loader',
            options: {
              emitErrors: true,
              typeCheck: true,
            }
          },
        ],
        exclude: /node_modules/,
      }
    ]
  },



  plugins: [

    new cleanWebpackPlugin(['dist']),

    new htmlWebpackPlugin({
      title: 'React Trello Clone',
      template: './template.html',
      filename: 'index.html',
      chunks: ['app'],
    }),

    new htmlWebpackPlugin({
      title: 'Playground',
      template: './template.html',
      filename: 'pg.html',
      chunks: ['pg'],
    }),

  ],

};