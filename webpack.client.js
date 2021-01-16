const path = require('path');
const LoadablePlugin = require('@loadable/webpack-plugin'); 

module.exports = {
    entry: './src/client/client.js',
    output: {
        path: path.resolve(__dirname, 'dist/public'),
        filename: "[name]_bundle.js",
        chunkFilename: "[name]_bundle.js", 
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test : /\.css$/, loader:['style-loader', 'css-loader'] }
        ]
    },
    plugins: [new LoadablePlugin()],
}