const webpack = require('webpack');
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
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

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
    ],


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
                loaders: [
                    'style',
                    'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                    'resolve-url',
                    'sass'
                ]
            },
            // {
            //     test: /\.scss$/,
            //     loaders: ["style-loader", "css-loader", "sass-loader"]
            // },
            // {
            //     test: /\.css$/,
            //     loader: ExtractTextPlugin.extract("style", "css!sass")
            // }
        ]
    },
    //  plugins: [new webpack.optimize.DedupePlugin()]

}