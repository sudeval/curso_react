const port = 3003;

const bodyParse = require('body-parser')
const express = require('express')
// retorna um novo servidor
const server = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')


// para toda requisicao o (middleware) bodyParse extendido vai ser aplicado
server.use(bodyParse.urlencoded({extended: true}))
// apenas para as urls que comecam com ola
// server.use('/ola', bodyParse.urlencoded({extended: true}))
server.use(bodyParse.json())
server.use(allowCors)
// transformar as strings para inteiro (skip=0&limite=1)
server.use(queryParser())

server.listen(port, function(){
    console.log(`BACKEND (my-money-app) is runing on port ${port}`)
})


module.exports = server