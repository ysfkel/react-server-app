const webpack = require('webpack');
const path = require("path");

module.exports = {
    entry: './src/client-app.jsx', //path.join(__dirname, "src", "client-app.jsx"),
    output: {
        path: 'src/public/js', //path.join(__dirname, "src", "public", "js"),
        filename: "bundle.js"
    },
    devServer: {
        address: 'localhost',
        port: 3000,
        historyApiFallback: true
    },

    module: {
        loaders: [{
                // test: /\.jsx$/,
                test: path.join(__dirname, "src"),
                loader: "babel-loader",
                query: {
                    cacheDirectory: "babel_cache",
                    presets: ["react", "es2015"]
                },

            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },

        ]
    },
    plugins: [new webpack.optimize.DedupePlugin()]

}