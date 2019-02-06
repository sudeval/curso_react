import React, { Component } from 'react'

import Main from '../templates/Main'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
}

const initialState = {
    user: {
        name: '',
        email: ''
    },
    list:[]
}


export default class UserCrud extends Component {

    state = {...initialState}

    clear() {
        this.setState( {user: initialState.user})
    }

    save() {
        const user = this.state.user;
        // qualquer numero diferente de zero (user.id) vai retornar verdadeiro/true
        const method = user.id ? 'put' : 'post';
        // 'localhost:3001/users'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
        // alternativa a anotação ponto
        axios[method](url, user)
            .then(resposta => {
                // a melhor opcao seria atualizar a partir do servidor
                const list = this.getUpdatedList(resposta.data)
                this.setState( {user: initialState.user, list})
            })
    }

    getUpdatedList(user) {
        // remove o usuario da lista
        const list = this.state.list.filter(u => u.id !== user.id)
        // coloca o usuario na primeira posicao
        list.unshift(user)
        return list
    }

    render() {
        return (
            <Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        )
    }

}