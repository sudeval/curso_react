export function submit(values, url) {
    return dispatch =>      {
        axios.post(url, values)
            .then(resp => {
                dispatch([
                    { type: 'USER_FETCHED', payload: resp.data}
                ])
            })
            .catch(e => {
                e.response.data.errors.array.forEach(
                    error => toastr.error('Erro', error));
            })
    }
}

export function logout () {
    return { type: 'TOKEN_VALIDATED', payload: false}

}
export function validateToken(token) {
    return dispatch => {
        if (token) {

        } else {
            dispatch({ type: 'TOKEN_VALIDATED', payload: false})
        }
    }
}