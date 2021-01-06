const path = require('path');
const webpackNodeExternals = require('webpack-node-externals'); // ** Ignore /node_modules **

module.exports = {
    target: 'node',
    entry: './server.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "server_bundle.js"
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: '/node_modules/', loader: "babel-loader" }, 
            { test: /\.css$/, loader: 'ignore-loader' }
        ]
    },
    externals: [webpackNodeExternals()]
}