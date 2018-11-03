const INITIAL_STATE = { description: '', list: [] }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return {...state, description: action.payload}
        case 'TODO_SEARCHED': {
            // versao em que era utilizada o middleware promise (payload.data)
            // return {...state, list: action.payload.data}
            // versao com o thunk
            return {...state, list: action.payload}
        }
        case 'TODO_CLEAR': {
            // limpando o texto digitado
            return {...state, description: ''}
        }
        default:
            return state;
    }
}

// nao faz mais sentido ter o adicionar apenas para limpar
/* case 'TODO_ADDED': {
    // limpando o texto digitado
    return {...state, description: ''}
} */