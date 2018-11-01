import React, { Component } from 'react'
import {connect} from 'react-redux'

class Field extends Component {

     render() {
         return (
             <div>
                <label>{this.props.value}</label><br />
                <input onChange={this.handleChange} value={this.props.value} />
             </div>
         )
     }
}

// REDUX
// Não irei mais trabalhar com state (diretamente) nos componentes,
// por isso a necessidade da funcao abaixo
function mapStateToProps(state) {
    return {
        value: state.field.value
    }
    // field por ter sido definido assim em index.jsx
}

// padrao decorator
// connect
export default connect(mapStateToProps)(Field)