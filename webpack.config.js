const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const {AutomaticPrefetchPlugin} = require("webpack");

module.exports = (_, argv) => {
  const isProductionMode = argv.mode === 'production';

  return {
    mode: isProductionMode ? 'production' : 'development',
    target: 'web',
    entry: {
      index: './src/index.tsx',
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].bundle.js',
      // publicPath: '/',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'], // Расширения, которые используются
    },
    devServer: {
      index: 'index.html',
      contentBase: path.join(__dirname, 'src/static'), // Расположение статических файлов
      watchContentBase: true, // Изменение файлов вызывает полную перезагрузку страницы.
      //compress: true, // Включить сжатие gzip
      hot: true, // Горячая замена модуля
      //open: true,
      port: 4200,
      // noInfo: true, // Только ошибки и предупреждения о горячей перезагрузке
    },
    devtool: isProductionMode ? false : 'inline-source-map',
    optimization: {
      minimize: true,
      minimizer: [
        new CssMinimizerPlugin({parallel: true}),
        new TerserPlugin({parallel: true}),
      ],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx|ts)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.((c|sa|sc)ss)$/i,
          use: [
            isProductionMode
              ? MiniCssExtractPlugin.loader
              : {loader: 'style-loader'},
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                modules: {
                  auto: true, ///\.module\.\w+$/i.test(filename)
                  exportGlobals: true,
                  localIdentName: '[path][name]__[local]--[hash:base64:5]',
                },
                sourceMap: true
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: ['postcss-preset-env'],
                },
                sourceMap: true
              },
            },
            {
              loader: 'sass-loader',
              options: {sourceMap: true}
            },
          ],
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'images',
              },
            },
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[contenthash].[ext]',
                outputPath: 'fonts',
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: 'src/static/index.html',
        favicon: "src/static/favicon.ico",
      }),
      new CopyPlugin({
        patterns: [
          {from: 'src/static'},
        ],
      }),
      new ESLintPlugin({
        extensions: ['ts', 'tsx', 'js', 'jsx'],
      }),
      new MiniCssExtractPlugin({
        filename: "[name].bundle.css",
        chunkFilename: "[id].css",
      }),
      new AutomaticPrefetchPlugin(),
    ],
  };
};
