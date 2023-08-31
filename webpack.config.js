const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = (env) => {

  const mode = env.mode || 'development';

  return {
    mode: mode,

    entry: path.resolve(__dirname, 'src', 'js', 'index.js'),

    output: {
      filename: '[name].[hash].js',
      path: path.resolve(__dirname, 'dist'),
      assetModuleFilename: 'assets/[name].[hash][ext]',
      clean: true,
    },

    module: {
      rules: [
        {
          test: /\.(?:js|mjs|cjs)$/i,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: "defaults" }]
              ]
            }
          }
        },
        {
          test: /\.scss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.html$/i,
          use:['html-loader']
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.pdf$/i,
          use:['file-loader']
        }
      ],
    },

    resolve: {
      extensions: ['.js'],
      modules: [path.resolve(__dirname, 'src') ,'node_modules'],

    },

    plugins: [
      new HtmlWebpackPlugin(
        {
          template: path.resolve(__dirname, 'index.html'),
        }
      ),
      new BundleAnalyzerPlugin(),
      new MiniCssExtractPlugin(),
    ],

    devServer: {
      historyApiFallback: true,
      hot: true,
      port: 8080,
    }
  }
}
