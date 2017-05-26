const mongoose = require('mongoose')
// evitar mensagem de warning (deprected)
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/todo')