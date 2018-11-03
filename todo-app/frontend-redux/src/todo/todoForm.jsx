import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

import {changeDescription, search, add, clear} from './todoAction'

// necessário transformar em componente para utilizar a funcao willMount e executar
// a action search
class TodoForm extends Component {

    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    keyHandler(e) {
        // desctructure (remove as funcoes ou propriedades de props)
        const {search, add, description, clear} = this.props;
        if (e.key === 'Enter') {
            e.shiftKey ? search(description) : add()
        } else if (e.key === 'Escape') {
            clear()
        }
    }


    // chamado logo depois do componente ter sido rederizado
    componentWillMount() {
        this.props.search()
        // search tá em props por já ter sido mapeado no mapDispatchToProps
    }

    render() {
        const {search, add, description} = this.props;
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
                        onClick={() => add(description)}></IconButton>
                    <IconButton style='info' icon='search'
                        onClick={() => search(description)}></IconButton>
                    <IconButton style='default' icon='close'
                        onClick={() => this.props.clear()}></IconButton>
                </Grid>
                
            </div>
        )
    }
}

// nome da propriedade no props (description)
const mapStateToProps = state => ({description: state.todo.description})
// cara que dispara a ação e manda para o reducers
const mapDispatchToProps = dispatch => bindActionCreators({changeDescription, search, add, clear}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)