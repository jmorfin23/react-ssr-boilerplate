const path = require('path');
const webpackNodeExternals = require('webpack-node-externals'); // ** Ignore /node_modules **
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

// Inform webpack that we are building a bundle for 
// nodejs, rather than for the browser. 
// --> does not include the native modules that are normally included in node

const isProd = process.env.NODE_ENV === 'production'


module.exports = {
    target: 'node',
    mode: isProd ? 'production' : 'development',
    // Tell webpack the root file of our 
    // Server application. 
    entry: './src/server.js',

    // Tell webpack where to put the output 
    // file that is generated
    // __dirname: references the current working directory of our project
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: isProd ? "[name].[contentHash].bundle.js": "[name].bundle.js", 
        chunkFilename: isProd ? "[name].[contentHash].bundle.js": "[name].bundle.js",
        libraryTarget: 'commonjs2'
    },

    // Tell webpack to run babel on every file
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }, 
            { test: /\.css$/, loader: 'ignore-loader' }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    externals: [webpackNodeExternals()], 
    plugins: [
        new CleanWebpackPlugin()
    ]
}