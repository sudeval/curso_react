const INITIAL_STATE = {step:1, number:0}

export default function(state = INITIAL_STATE, action) {
    // faz spread com o estado atual e atualiza o step ou number de acordo com o tipo de acao.
    switch(action.type) {
        case 'INC':
            return { ...state, number: state.number + state.step}
        case 'DEC':
            return { ...state, number: state.number - state.step}
        case 'STEP_CHANGED':
            return { ...state, step: action.payload}
        default:
            return state
    }
}