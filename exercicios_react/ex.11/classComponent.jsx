import React, { Component } from 'react'

// na classe é necessário ter a funcao render e ela precisa retornar algo.
export default class ClassComponent extends Component {
    render() {
        return (
            <h1>{this.props.value}</h1>
        )
    }
}