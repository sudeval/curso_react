import React from 'react'
// conectar esse componente com os dados/store e as actions
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {markAsDone, markAsPending, remove} from './todoAction'

import IconButton from '../template/iconButton'

const TodoList = props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style='success' icon='check'
                        onClick={() => props.markAsDone(todo)}
                        hide={todo.done}></IconButton>
                    <IconButton style='warning' icon='undo'
                        onClick={() => props.markAsPending(todo)}
                        hide={!todo.done}></IconButton>
                    <IconButton style='danger' icon='trash-o'
                        onClick={() => props.remove(todo)}
                        hide={!todo.done}></IconButton>
                </td>
            </tr>
        ))
    }
    // key={todo._id} evitar que ocorra um warning na tela (https://reactjs.org/docs/lists-and-keys.html#keys)
    // onClick={() => props.handleRemove(todo)} -> arraw function devido a necessidade de passar o item(todo) e não o evento.
    // no contrario estaria chamando o resultado da funcao e nao a funcao {props.handleRemove(todo)}

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}


const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = dispatch => bindActionCreators({markAsDone, markAsPending, remove}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);