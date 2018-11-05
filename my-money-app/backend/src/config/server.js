const port = 3003;
const bodyParse = requeri(body-parser)
const express = require('express')
const server = express()


server.use('óla', bodyParse.urlencoded({extended: true}))
server.use(bodyParse.json)