const path = require('path');
const LoadablePlugin = require('@loadable/webpack-plugin'); 
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    mode: isProd ? 'production' : 'development', 
    entry: './src/client/client.js',
    output: {
        path: path.resolve(__dirname, 'dist/public'),
        filename: isProd ? "[name].[contentHash].bundle.js": "[name].bundle.js",
        chunkFilename: isProd ? "[name].[contentHash].bundle.js": "[name].bundle.js", 
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test : /\.css$/, exclude: /node_modules/, use: [ExtractCssChunks.loader, 'css-loader'] }
        ]
    },
    optimization: {
        splitChunks: {
          cacheGroups: {
            commons: {
              test: /[\\/]node_modules[\\/]/,
              name: "vendor",
              chunks: "all"
            }
          }
        }, 
        minimize: true,
        minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
      },
      plugins: [
        new LoadablePlugin(), 
        new CleanWebpackPlugin(), 
        new ExtractCssChunks({
            filename: '[name].css',
            chunkFilename: '[id].css',
          }),
        new BundleAnalyzerPlugin(), 
    ]
}