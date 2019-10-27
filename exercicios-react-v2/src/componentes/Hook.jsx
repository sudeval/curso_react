import React, { useState, useEffect } from 'react'

/**
 * Padrao seria usar 'use' no nome da funcao
 * https://reactjs.org/docs/hooks-intro.html
 */
export default props => {
    /* variavel e funcao que ira modificar a variavel */
    const [contador, setContador] = useState(100);
    const [status, setParOuImpar] = useState('Par');

    /** executado durante o ciclo de vida (componentDidMount e componentUpdateMount)  */
    useEffect(() => {
        contador % 2 === 0 ? setParOuImpar('Par') : setParOuImpar('Impar')
    })

    return (
        <div>
            <h1>{contador}</h1>
            <h3>{status}</h3>
            <button onClick={() => setContador(contador + 1)}>Inc</button>
            <button onClick={() => setContador(contador - 1)}>Dec</button>
        </div>
    )
}
