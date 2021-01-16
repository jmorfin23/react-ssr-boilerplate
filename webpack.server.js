const path = require('path');
const webpackNodeExternals = require('webpack-node-externals'); // ** Ignore /node_modules **
const LoadablePlugin = require('@loadable/webpack-plugin'); 

// Inform webpack that we are building a bundle for 
// nodejs, rather than for the browser. 
// --> does not include the native modules that are normally included in node
module.exports = {
    target: 'node',


    // Tell webpack the root file of our 
    // Server application. 
    entry: './src/server.js',

    // Tell webpack where to put the output 
    // file that is generated
    // __dirname: references the current working directory of our project
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name]_bundle.js",
        chunkFilename: "[name]_bundle.js"
    },
    optimization: {
		// We no not want to minimize our code.
		minimize: false
	},
    // Tell webpack to run babel on every file
    module: {
        rules: [
            { test: /\.js$/, exclude: '/node_modules/', loader: "babel-loader" }, 
            { test: /\.css$/, loader: 'ignore-loader' }
        ]
    },
    externals: [webpackNodeExternals()]
}