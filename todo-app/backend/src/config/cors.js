// CORS - Permitir que a requisicao possa vir de uma origem
//        diferente da aplicação

// next -> eh o chain, que diz se vai para o proximo middleware ou se vai abortar por ex.
module.exports = function(request, response, next) {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    // continuar o fluxo (chain of responsability)
    next()
}