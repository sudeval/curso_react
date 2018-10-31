import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style='success' icon='check'
                        onClick={() => props.handleMarkAsDone(todo)}
                        hide={todo.done}></IconButton>
                    <IconButton style='warning' icon='undo'
                        onClick={() => props.handleMarkAsPending(todo)}
                        hide={!todo.done}></IconButton>
                    <IconButton style='danger' icon='trash-o'
                        onClick={() => props.handleRemove(todo)}
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
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}