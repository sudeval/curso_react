import React from 'react'
import ReactDOM from 'react-dom'
import {combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'

import Field from './field'
import fieldReducer from './fieldReducer'


// reducers são funcoes
const reducers = combineReducers({
    field: fieldReducer
})
// funcao inicial retornava sempre o mesmo valor.
// field: () => ({value: 'Opa'})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Field initialValue='Teste' />
    </Provider>
    , document.getElementById('app')
)