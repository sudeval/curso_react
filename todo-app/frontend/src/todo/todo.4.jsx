import React, {Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

// backend
const URL = 'http://localhost:3003/api/todos'

// as funcoes de todoForm e todoList vao ficar aqui (facilitar o controle do estado delas)
// os valores enviados atraves do props nao devem ser alterados, somente atraves do state.
export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {description: '', list: []}

        // garantindo que o this vai ser o 'Todo'
        this.handleAdd = this.handleAdd.bind(this)

        this.handleChange = this.handleChange.bind(this)

        this.refresh();
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, {description})
        .then(resp => this.refresh())
    }
    // equivalente a: axios.post(URL, { description: 'TEEEEEEEEEEEESTE'})
    
    handleChange(e) {
        this.setState({...this.state, description: e.target.value})
    }

    refresh() {
        axios.get(`${URL}?sort=-createdAt`)
            .then(resposta => this.setState({...this.state, list: resposta.data}))
            // .then(resposta => console.log(resposta.data))
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} />
                <TodoList />
            </div>
        )
    }
}

// Tudo que for passado na tag (ex. TodoForm) é considerado como propriedade (props) no destino.