const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
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