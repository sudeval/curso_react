import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})


export const search = () => {
    // nao é bom ficar pegando o estado na action, apenas se for o jeito mesmo :P
    // o thunk (novamente ;) fornece um metodo que recebe um dispatch e o estado
    return (dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/`: ''
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({type: 'TODO_SEARCHED', payload: resp.data}))
    }
    // nessa versao o payload ja recebe o 'data' e nao mais a request para o middleware promise resolver
    // ou seja, vai ter modificacao no reducers tb.
}

export const add = (description) => {
    // utilizando o middleware thunk (redux-thunk) para garantir a ordem das promises
    // permite o metodo nao mais retornar uma action e sim um metodo que recebe dispatch como parametro
    return dispatch => {
        // promise (adicionar)
        axios.post(URL, {description})
        .then(resp => dispatch(clear()))
        // .then(resp => dispatch(search())) a nova versao do clear chama essa ação
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

export const clear = event => {
    // utilizando o middleware multi para que o limpar tb chame o pesquisar.
    return [{ type: 'TODO_CLEAR' }, search()]
}