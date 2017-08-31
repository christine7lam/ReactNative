var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './server/app.js',
    output: { path: __dirname, filename: 'bundle.js'},

    module: {
        loaders: [
            { test: /\.less$/, loader: 'style!css!autoprefixer?browsers=last 2 version!less' },
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
};