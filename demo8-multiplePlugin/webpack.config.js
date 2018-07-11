const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Webpack-demos',
            filename: 'index.html'
        }),
        new OpenBrowserPlugin({
            url: 'http://localhost:8081'
        })
    ]
};
