import React, { Component } from 'react'

export default class Contador extends Component {



    // 3a solucao seria transformar o maisUm em arrow
    // maisUm = () => {
        // console.log(this);
        // this.props.numero++;
    // }

    render() {
        return (
            <div>
                <div>Numero: {this.props.numero}</div>
                {/* versao com construtur e bind -  1a solucao */}
                <button onClick={this.maisUm}>Inc</button>
                {/* versao com arrow function - 2a solucao */}
                {/* <button onClick={() => this.maisUm()}>Inc</button> */}
                <button>Dec</button>
            </div>
        )
    }

        // 1a solucao                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        // constructor(props) {
            // super(props)
            // this.maisUm = this.maisUm.bind(this);
        // }


    // maisUm() {
        // console.log(this)
        // this.props.numero++;
    // }

    
}
