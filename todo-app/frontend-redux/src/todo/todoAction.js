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

export const add = (description) => {
    const request = axios.post(URL, {description})
    return {
        type: "TODO_ADDED",
        payload: request
    }
    // existe a necessidade de disparar o search tb no caso de sucesso do adicionar (recarregar a lista)
    // TODO modificar para um multiplo promise
}