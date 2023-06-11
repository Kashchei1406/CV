const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CleanWebpackPlugin =require('clean-webpack-plugin').CleanWebpackPlugin


module.exports = (env) => {

  const mode = env.mode || 'development';
  const isDev = mode === 'development';


  return {
    entry: [
      path.resolve(__dirname, 'src', 'js', 'main.js'),
      path.resolve(__dirname, 'src', 'js', 'modules',  'animation.js')
    ],

    output: {
      filename: '[name].[hash].js',
      path: path.resolve(__dirname, './dist'),
      clean: true,
    },

    optimization: {
      runtimeChunk: 'single',
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
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            'postcss-loader',
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
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
      new CleanWebpackPlugin()
    ],

    mode: mode,

    devtool: isDev ? 'source-map' : undefined,

    devServer: {
      historyApiFallback: true,
      hot: true,
      port: 8080,
    }
  }
}
