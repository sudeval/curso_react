import React from 'react'
import ReactDOM from 'react-dom'
import {combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'

import Counter from './counter'
import counterReducer from './counterReducer'


// reducers são funcoes
const reducers = combineReducers({
    counter: counterReducer
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Counter />
    </Provider>
    , document.getElementById('app')
)