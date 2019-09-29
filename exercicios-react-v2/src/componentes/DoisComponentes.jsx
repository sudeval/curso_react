import React from 'react'


const componenteA = props => 
<h1>{props.valor}</h1>


const componenteB = props => 
<h1>{props.valor}</h1>


export { componenteA, componenteB }
export default componenteA;

// export { ComponenteA, ComponenteB }

// export const componenteA = props => 
//     <h1>{props.valor}</h1>

// export default function() {
    // return <h1>teste</h1>
// }