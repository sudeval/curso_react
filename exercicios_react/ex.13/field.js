import React, { Component } from 'react'

class Field extends Component {
     constructor(props) {
         super(props)
         this.state = { value: props.initialValue}
         // fazendo o bind para que independente de quem chame a funcao, o this vai apontar
         // para o Field. 
         // O this por padrão depende de quem chamou.
         this.handleChange = this.handleChange.bind(this)
     }

     handleChange(event) {
         // o que foi digitado no input
         this.setState({ value: event.target.value})
     }

     render() {
         return (
             <div>
                <label>{this.state.value}</label><br />
                <input onChange={this.handleChange} value={this.state.value} />
             </div>
         )
     }
    // se tirar o onchange o react nao vai permitir editar o input (componente controlado/estado absoluto)
    // a nao ser que coloque null no valor inicial (no lugar de props.initialValue)
    // existe tb a opcao de ainda que iniciando com null setar o valor defaul vazio para ele continuar controlado
    // ex. value={this.state.value || ''}
}

export default Field