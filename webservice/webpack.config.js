const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/app.js',
    target: "node",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
    },
    externals: [
        nodeExternals(),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
              },
        ],
    },
};