import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

import {changeDescription, search} from './todoAction'

// necessário transformar em componente para utilizar a funcao willMount e executar
// a action search
class TodoForm extends Component {

    constructor() {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    keyHandler(e) {
        if (e.key === 'Enter') {
            e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }


    // chamado logo depois do componente ter sido rederizado
    componentWillMount() {
        this.props.search()
        // search tá em props por já ter sido mapeado no mapDispatchToProps
    }

    render() {
        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control'
                        placeholder='Adicione uma tarefa'
                        onChange={this.props.changeDescription}
                        value={this.props.description}
                        onKeyUp={this.keyHandler}></input>
                </Grid>
        
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus'
                        onClick={this.props.handleAdd}></IconButton>
                    <IconButton style='info' icon='search'
                        onClick={this.props.handleSearch}></IconButton>
                    <IconButton style='default' icon='close'
                        onClick={this.props.handleClear}></IconButton>
                </Grid>
                
            </div>
        )
    }
}

// nome da propriedade no props (description)
const mapStateToProps = state => ({description: state.todo.description})
// cara que dispara a ação e manda para o reducers
const mapDispatchToProps = dispatch => bindActionCreators({changeDescription, search}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)