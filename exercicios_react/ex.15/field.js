import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {changeValue} from './fieldActions.js'

class Field extends Component {

     render() {
         return (
             <div>
                <label>{this.props.value}</label><br />
                <input onChange={this.props.changeValue} value={this.props.value} />
             </div>
         )
     }
}

// REDUX
// Não irei mais trabalhar com state (diretamente) nos componentes,
// por isso a necessidade da funcao abaixo.
// Que pega parte do estado para colocar no props do componente.
function mapStateToProps(state) {
    return {
        value: state.field.value
    }
    // field por ter sido definido assim em index.jsx
}

// Responsavel por pegar as actions(ações) e colocar nas props do componente.
function mapDispatchToProps(dispatch) {
    // bindActionAcreators liga as acoes criadas com os dispatchs
    return bindActionCreators({changeValue}, dispatch);
}

// padrao decorator
// connect
// export default connect(mapStateToProps)(Field)
export default connect(mapStateToProps, mapDispatchToProps)(Field)