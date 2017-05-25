const webpack = require('webpack');

module.exports = {
    entry: './ex/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    // não precisar ficar colocando a extensao .jsx ao criar os components (import)
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    // jsx é o padrão para o react, inclusive a IDE reconhece.
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }]
    }
}