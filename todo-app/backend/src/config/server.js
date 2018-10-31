const port = 3003

// parser do body da requisicao (transformando em javascript)
const bodyParser = require('body-parser')
// servidor web
const express = require('express')
// recebe uma instancia para cada vez que é chamado o express()
const server = express();
const allowCors = require('./cors')

// body-parser vai verificar as requisicoes urlencoded (formulário por ex.) e fazer o parser.
// extended é para suportar mais tipo de dados que o padrão.
server.use(bodyParser.urlencoded({ extended: true}))
// body-parser fazendo parse do JSON também.
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server;