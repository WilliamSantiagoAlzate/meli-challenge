const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/images/[hash][ext][query]'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      'components': path.resolve(__dirname, 'src/components/'),
      'helpers': path.resolve(__dirname, 'src/helpers/'),
      'images': path.resolve(__dirname, 'src/assets/images/'),
      'mocks': path.resolve(__dirname, 'src/mocks/'),
      'redux': path.resolve(__dirname, 'src/redux/'),
      'routes': path.resolve(__dirname, 'src/routes/'),
      'saga': path.resolve(__dirname, 'src/saga/'),
      'styles': path.resolve(__dirname, 'src/styles/'),
      'types': path.resolve(__dirname, 'src/types/'),
      'views': path.resolve(__dirname, 'src/views/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.css|.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].[contenthash].css'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets/images"),
          to: "assets/images"
        }
      ]
    }),
    new Dotenv(),
    new CleanWebpackPlugin(),
    new TsconfigPathsPlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ]
  }
}