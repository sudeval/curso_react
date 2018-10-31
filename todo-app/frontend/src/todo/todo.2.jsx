import React, {Component} from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

// as funcoes de todoForm e todoList vao ficar aqui (facilitar o controle do estado delas)
// os valores enviados atraves do props nao devem ser alterados, somente atraves do state.
export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {description: '', list: []}

        // garantindo que o this vai ser o 'Todo'
        this.handleAdd = this.handleAdd.bind(this)

        this.handleChange = this.handleChange.bind(this)
    }

    handleAdd() {
        console.log(this)
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value})
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