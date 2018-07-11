const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        index: './index.jsx',
        other: './other.jsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react']
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            // (the commons chunk name)

            filename: "commons.js",
            // (the filename of the commons chunk)
        })
    ]
};
