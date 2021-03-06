const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
  mode: 'development',
  watch: true,
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@helpers': path.resolve(__dirname, 'src/helpers/'),
      '@mocks': path.resolve(__dirname, 'src/mocks/'),
      '@redux': path.resolve(__dirname, 'src/redux/'),
      '@routes': path.resolve(__dirname, 'src/routes/'),
      '@saga': path.resolve(__dirname, 'src/saga/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@types': path.resolve(__dirname, 'src/types/'),
      '@views': path.resolve(__dirname, 'src/views/'),
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
    new TsconfigPathsPlugin({
      extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    port: 3006,
  },
}