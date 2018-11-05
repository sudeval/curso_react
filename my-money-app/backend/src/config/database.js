const mongoose = require('mongoose')
// evitar os warns de deprectade
mongoose.Promise = global.Promise
modulo.exports = mongoose.connect('mongodb://localhost/mymoney')