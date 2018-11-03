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
    // temos um problema nessa versao, pois o axios.get retorna uma promisse (then) e as funcoes
    // da action creator (ex. search) deve ser sincrona
    // necessario o uso de um middleware (redux-promise)
}

/* export const add = (description) => {
    const request = axios.post(URL, {description})
    return {
        type: "TODO_ADDED",
        payload: request
    }
    // existe a necessidade de disparar o search tb no caso de sucesso do adicionar (recarregar a lista)
    // TODO modificar para um multiplo promise (redux-multi)
} */

/* export const add = (description) => {
    const request = axios.post(URL, {description})
    return [
        {type: "TODO_ADDED",  payload: request},
        search()
    ]
    // nessa versao (multi-redux) os dois métodos são executados, mas não existe garantia que o search()
    // vai ser chamado somente depois da execucao do 'add'.
} */

export const add = (description) => {
    // utilizando o middleware thunk (redux-thunk) para garantir a ordem das promises
    // permite o metodo nao mais retornar uma action e sim um metodo que recebe dispatch como parametro
    return dispatch => {
        // promise (adicionar)
        axios.post(URL, {description})
        .then(resp => dispatch({type: 'TODO_ADDED', payload: resp.data}))
        .then(resp => dispatch(search()))
    }
    // garantindo a ordem as promises (com os then)
    // lembrando que dispatch é o cara que envia a action para os reducers
}