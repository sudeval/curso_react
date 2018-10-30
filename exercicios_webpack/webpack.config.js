const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// objeto exposto
// configuracoes
module.exports = {
    // entrada
    entry: './ex/index.js',
    output: {
        // saida (gerado o arquivo padrao/unico js)
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    // servidor web que sera utilizado (webpack-dev-server / poderia ser express)
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    // plugin para o react reconhecer o css (app.css vai ser o nome do arquivo criado automaticamente.)
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    // necessário para usar o ES2015 e o browser entender import/export.
    module: {
        loaders: [{
            test: /.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                // presets do 'react' para ele entender o HTML dentro do .js
                presets: ['es2015', 'react'],
                // spread funcionar com o es2015
                plugins: ['transform-object-rest-spread']
            }
        }, // loader para o css
             {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }],
        
    }
}
