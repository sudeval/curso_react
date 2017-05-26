const Todo = require('./todo')

// node restful
Todo.methods(['get', 'post', 'put', 'delete'])
// new -> quando atualizar o objeto retornar o mesmo já atualizado.
//        o padrão é retornar o objeto sem alterações (antigo)
// runValidators -> para que as validações sejam aplicadas tb no update (campos obrigatórios, ranges e etc.)
//                  o padrão é não validar (wtf)
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo
