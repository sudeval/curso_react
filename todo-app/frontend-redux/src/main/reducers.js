import {combineReducers} from 'redux'

import todoReducer from './todoReducer'


// root reducer vai concatenar/dominar todos os outros
const rootReducer = combineReducers({
    todo: todoReducer
})

export default rootReducer;