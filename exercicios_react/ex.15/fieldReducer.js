const INITIAL_STATE = { value: 'Opa'}



export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'VALUE_CHANGED':
            //  retornando o valor que a action preencheu no payload.
            return {value: action.payload}
        default:
            return state
    }
}


// retornando um novo objeto. return {value: action.payload}
// retornando apenas uma modificacao do estado: state.value = action.payload; return state; (nao deve ser assim)