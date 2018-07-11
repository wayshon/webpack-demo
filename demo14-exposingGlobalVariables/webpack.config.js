const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    externals: {
        // require('data') is external and available
        //  on the global var data
        'data': 'data'
    }
};
