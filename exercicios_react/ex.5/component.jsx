import React from 'react'

/**
const Primeiro = props => (
    <h1>Primeiro Componente</h1>
)

const Segundo = props => <h1>Segundo  Componente!</h1>

export {Primeiro, Segundo}
 */


/**
 * 2a maneira de ser feito
 */
/**
export const Primeiro = props => (
    <h1>Primeiro Componente</h1>
)

export const Segundo = props => <h1>Segundo  Componente!</h1>
 */

/**
 * 3a maneira de ser feito
 * deve ser importado com import Primeiro, { Segundo } from './component'
 * o default vem primeiro e sem as chaves.
 */
export default props => (
    <h1>Primeiro Componente</h1>
)

export const Segundo = props => <h1>Segundo  Componente!</h1>