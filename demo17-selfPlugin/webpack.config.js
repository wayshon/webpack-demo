const path = require('path');
const WXPlugin = require('./WXPlugin');

module.exports = {
    entry: './index.css',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.css'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ]
    },
    plugins: [
        new WXPlugin({options: true})
    ]
};
