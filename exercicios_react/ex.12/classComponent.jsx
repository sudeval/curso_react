import React, { Component } from 'react'

/**
 * this.props e this.status são nomes padrão.
 * 
 */

// na classe é necessário ter a funcao render e ela precisa retornar algo.
export default class ClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { value: props.initialValue}
    }

    sum (delta) {
        // setState devido o principio ser evoluido o dados e não alterado.
        // para apenas um atributo.
        this.setState( {value: this.state.value + delta} );

        // para casos de mais de um atributo (primeiro parametro ele clona todo o stado e no segundo ele atualiza o valor da propriedade value.).
        // this.setState( { ...this.state, value: this.state.value + delta} );
    }

    render() {
        // ele não deixa fazer essa alteração (incremento abaixo), por conta dos atributos de props serem sempre read-only.
        // this.props.value++
        return (
            <div>
                <h1>{this.props.label}</h1>
                <h2>{this.state.value}</h2>
                <button onClick={() => this.sum(-1)}>Decrementar</button>
                <button onClick={() => this.sum(1)}>Incrementar</button>
            </div>
        )
    }
    // nao funciona pq estaria passando o RESULTADO da funcao
    // ele espera uma FUNCAO
    // <button onClick={this.sum(1)}></button>
}