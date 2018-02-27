var webpack = require('webpack');

module.exports = {
    entry : {
        index : './src/js/index.js'
    },
    output : {
        path : __dirname + './static/',
        filename: '[name].js',
        publicPath : 'http://localhost:8080/static'
    }
}