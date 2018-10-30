import React from 'react'


/** 
 * Obtendo a propriedade (lastName) do elemento pai (clone com o spread - boa prática) 
 * {React.cloneElement(props.children, props)}
 * O Reac.cloneElement funciona apenas para um elemento (children com um elemento)
*/
export default props => (
    <div>
        <h1>Família</h1>
        {React.cloneElement(props.children, {...props})}
    </div>

)