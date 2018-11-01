export function changeValue(e) {
    console.log('changeValue')
    return {
        type: 'VALUE_CHANGED',
        payload: e.target.value
    }
    // sobre o objeto retornado: type é uma propriedade obrigatoria (nome), mas payload(conteudo) pode ter qualquer nome.
}