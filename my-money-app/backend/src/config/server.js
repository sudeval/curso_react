const port = 3003;

const bodyParse = require('body-parser')
const express = require('express')
// retorna umnovo servidor
const server = express()
// const allowCors = require('./cors')
// const queryParser = require('express-query-int')


// para toda requisicao o (middleware) bodyParse extendido vai ser aplicado
server.use(bodyParse.urlencoded({extended: true}))
// apenas para as urls que comecam com ola
// server.use('/ola', bodyParse.urlencoded({extended: true}))
server.use(bodyParse.json)
// server.use(allowCors)
// server.use(queryParser())

server.listen(port, function(){
    console.log(`BACKEND (my-money-app) is runing on port ${port}`)
})


module.exports = server