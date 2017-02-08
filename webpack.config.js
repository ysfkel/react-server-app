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

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
    ],


    module: {
        loaders: [
             {
        test: /\.scss$/,
        loaders: [
          'isomorphic-style-loader',
          'css-loader?modules&localIdentName=[name]_[local]_[hash:base64:3]',
          'postcss-loader'
        ]
      },
           
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            

            {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader'
        ]
      },
             {
                // test: /\.jsx$/,
               // test: path.join(__dirname, "src"),
               // Skip any files outside of your project's `src` directory
               include:[
                   path.resolve(__dirname,'src')
               ],
             // Only run `.js` and `.jsx` files through Babel
               test:/\.jsx?$/,
                loader: "babel-loader",
                query: {
                    cacheDirectory: "babel_cache",
                    plugins:['transform-runtime'],
                    presets: ["es2015","stage-0","react"]
                },

            }
        ]
    },
    //  plugins: [new webpack.optimize.DedupePlugin()]

}