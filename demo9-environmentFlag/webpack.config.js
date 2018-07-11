const path = require('path');

const webpack = require('webpack');

const devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: process.env.NODE_ENV !== 'production'
});

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [devFlagPlugin]
};
