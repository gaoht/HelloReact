var path  = require('path')
var webpack = require('webpack');
const os = require('os');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'index.js',
        path: __dirname + '/assets'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }
};