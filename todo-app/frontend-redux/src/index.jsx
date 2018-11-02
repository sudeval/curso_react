import React from 'react'
import ReactDOM from 'react-dom'
// redux
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import App from './main/app'
import reducers from './main/reducers'

// usando o dev tools
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// estado da nossa aplicacao
const store = createStore(reducers, devTools)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'))