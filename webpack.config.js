const path = require('path');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = (env, argv) => ({

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
      },

      {
        test: /\.(sc|c)ss$/,
        use: [
          argv.mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
            }
          },
          'postcss-loader',
          'sass-loader'
        ],
      },

    ],
  },



  plugins: [

    new cleanWebpackPlugin(['dist']),

    new MiniCssExtractPlugin({
      filename: argv.mode === 'development' ? '[name].css' : '[name].[hash].css',
    }),

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

});