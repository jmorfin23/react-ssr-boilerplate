const path = require('path');

module.exports = {
    target: 'node',
    entry: './src/client.js',
    output: {
        path: path.resolve(__dirname, 'dist/public'),
        filename: "client_bundle.js"
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test : /\.css$/, loader:['style-loader', 'css-loader'] }
        ]
    },
}