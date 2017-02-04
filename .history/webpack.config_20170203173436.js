const webpack = require('webpack');
const path = require("path");

module.exports = {
    entry: path.join(__dirname, "src", "client-app.js"),
    output: {
        path: path.join(__dirname, "src", "public", "js"),
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: path.join(__dirname, "src"),
            loaders: ["babel-loader"],
            query: {
                cacheDirectory: "babel_cache",
                presets: ["react", "es2015"]
            }
        }]
    },
    plugins: [new webpack.optimize.Dedupe]

}