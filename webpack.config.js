const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { ProvidePlugin } = require('webpack');
const Dotenv = require('dotenv-webpack');
const JsonMinimizerPlugin = require('json-minimizer-webpack-plugin');

const ASSET_PATH = process.env.ASSET_PATH || '/';
const srcPath = subdir => path.join(__dirname, 'src', subdir);

module.exports = (_, argv) => {
  const isProductionMode = argv.mode === 'production';

  return {
    mode: isProductionMode ? 'production' : 'development',
    target: 'web',
    entry: {
      index: './src/app/index.tsx',
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].bundle.js',
      publicPath: ASSET_PATH,
    },
    resolve: {
      extensions: ['*', '.ts', '.tsx', '.js', '.jsx', '.json'],
      alias: {
        '@': path.resolve(__dirname, 'src/'),
        components: srcPath('components'),
        screens: srcPath('screens'),
        api: srcPath('api'),
        utils: srcPath('utils'),
        assets: srcPath('assets'),
        static: srcPath('static'),
        styles: srcPath('styles'),
      },
    },
    devServer: {
      historyApiFallback: true,
      static: {
        directory: path.join(__dirname, 'src/static'),
      },
      hot: true,
      port: 4200,
    },
    devtool: isProductionMode ? false : 'inline-source-map',
    optimization: {
      minimize: true,
      minimizer: [
        new CssMinimizerPlugin({ parallel: true }),
        new TerserPlugin({ parallel: true }),
        new JsonMinimizerPlugin(),
      ],
      splitChunks: {
        chunks: 'all',
      },
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
              : { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                modules: {
                  auto: true, ///\.module\.\w+$/i.test(filename)
                  exportGlobals: true,
                  localIdentName: isProductionMode
                    ? '[hash:base64:5]'
                    : '[path][name]__[local]--[hash:base64:5]',
                },
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: ['postcss-preset-env'],
                },
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
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
        favicon: 'src/static/favicon.ico',
      }),
      new CopyPlugin({
        patterns: [
          {
            from: 'src/static',
            globOptions: {
              ignore: ['**/index.html', '**/favicon.ico'],
            },
          },
        ],
      }),
      new ESLintPlugin({
        extensions: ['ts', 'tsx', 'js', 'jsx'],
      }),
      new MiniCssExtractPlugin({
        filename: '[name].bundle.css',
        chunkFilename: '[id].css',
      }),
      new ProvidePlugin({
        React: 'react',
      }),
      new Dotenv(),
    ],
  };
};
