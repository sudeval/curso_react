// singleton
const express = require('express')

// recebendo parâmetro no node.
module.exports = function(server) {

    // API Routes (começando com /api)
    const router = express.Router()
    // middleware
    server.use('/api', router)

    // TODO Routes
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')
}