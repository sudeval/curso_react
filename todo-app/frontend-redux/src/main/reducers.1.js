import {combineReducers} from 'redux'

// root reducer vai concatenar/dominar todos os outros
const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler livro',
        list: [{
            _id: 1,
            description: 'Pagar fatura do cartao',
            done: true
        }, {
            _id: 2,
            description: 'Reuniao com diretoria',
            done: false
        }, {
            _id: 3,
            description: 'Consulta medica',
            done: false
        }]
    })
})
// inicialmente retornando objetos fixos fake, depois vai ser do db

export default rootReducer;