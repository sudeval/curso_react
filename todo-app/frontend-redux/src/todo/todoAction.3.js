import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})


export const search = () => {
    const request = axios.get(`${URL}?sort=-createdAt`)
    return {
        type: 'TODO_SEARCHED',
        payload: request
    }
}

export const add = (description) => {
    // utilizando o middleware thunk (redux-thunk) para garantir a ordem das promises
    // permite o metodo nao mais retornar uma action e sim um metodo que recebe dispatch como parametro
    return dispatch => {
        // promise (adicionar)
        axios.post(URL, {description})
        .then(resp => dispatch(clear()))
        .then(resp => dispatch(search()))
    }
    // garantindo a ordem as promises (com os then)
    // lembrando que DISPATCH é o cara que envia a action para os REDUCERS
}

export const markAsDone = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
        // como nao existe nenhuma acao no reducers para essa acao, nao precisa fazer o dispatch
        //.then(resp => dispatch({type: 'TODO_MARKED_AS_DONE', payload: resp.data}))
        .then(resp => dispatch(search()))
    }
}

export const markAsPending = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
        .then(resp => dispatch(search()))
    }
}

export const remove = todo => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(search()))
    }
}

export const clear = event => (
    { type: 'TODO_CLEAR' }
)