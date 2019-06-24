const path = require('path');
const HandlebarsPlugin = require("handlebars-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    target: "node",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    plugins: [
        new HandlebarsPlugin({
            entry: path.join(process.cwd(), "src", "templates", "*.hbs"),
            output: path.join(process.cwd(), "dist", "[name].html"),
            partials: [
                path.join(process.cwd(), "src", "templates", "partials", "*.hbs")
            ],
        })
    ]
};