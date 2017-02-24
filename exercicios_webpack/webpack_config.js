const webpack = require('webpack');

// objeto exposto
// configuracoes
module.exports = {
    entry: './ex/index.js',
    output: {
        // saida (gerado o arquivo padrao/unico js)
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    // servidor web que sera utilizado
    devServer: {
        port: 8080,
        contentBase: './public'
    }
}