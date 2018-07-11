const path = require('path');

module.exports = {
    entry: {
        one: './one.js',
        two: './two.js',
        three: './three.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    }
};
