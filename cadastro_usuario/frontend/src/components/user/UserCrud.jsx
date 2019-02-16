import React, { Component } from 'react'
import axios from 'axios'
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

const baseUrl = 'http://localhost:3001/users'

export default class UserCrud extends Component {

    state = {...initialState}

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({list: resp.data})
        })
    }

    clear() {
        // limpando apenas o usuario
        this.setState( {user: initialState.user})
    }

    save() {
        const user = this.state.user;
        // qualquer numero diferente de zero (user.id) vai retornar verdadeiro/true
        const method = user.id ? 'put' : 'post';
        // 'localhost:3001/users'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
        // alternativa a anotação ponto (axios.get | axios.post)
        axios[method](url, user)
            .then(resposta => {
                // a melhor opcao seria atualizar a partir do servidor
                const list = this.getUpdatedList(resposta.data)
                this.setState( {user: initialState.user, list})
            })
    }

    getUpdatedList(user, add = true) {
        // remove o usuario da lista
        const list = this.state.list.filter(u => u.id !== user.id)
        // coloca o usuario na primeira posicao
        if (add) {
            list.unshift(user)
        }
        return list
    }

    // atualizar o nome e o email
    updateField(event) {
        // clonando o usuário antes de alterar o estado com ele.
        const user = {...this.state.user}
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    load(user) {
        this.setState({user})
    }

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false)
            this.setState({list})
        })
    }

    renderForm() {
        return (
            <div className='form'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <div className='form-group'>
                            <label>Nome</label>
                            <input type='text' className='form-control'
                                name='name'
                                value={this.state.user.name}
                                onChange={e => this.updateField(e)}
                                placeholder='Digite o nome...' />
                        </div>
                    </div>

                    <div className='col-12 col-md-6'>
                        <div className='form-group'>
                            <label>E-mail</label>
                            <input type='text' className='form-control'
                                name='email'
                                value={this.state.user.email}
                                onChange={e => this.updateField(e)}
                                placeholder='Digite o e-mail...' />
                        </div>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        
                        <button className="btn btn-secundary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    renderTable() {
        return (
            <table className="table mt-4">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {this.renderRows()}
            </tbody>
            </table>
        )        
    }

    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning" onClick={() => this.load(user)}>
                            <i className='fa fa-pencil'></i>
                        </button>
                        <button className="btn btn-danger ml-2" onClick={() => this.remove(user)}>
                            <i className='fa fa-trash'></i>
                        </button>
                    </td>
                </tr>
            )
        })

    }


    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }

}