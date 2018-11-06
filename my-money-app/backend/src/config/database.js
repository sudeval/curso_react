const mongoose = require('mongoose')
// evitar os warns de deprectade
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney')