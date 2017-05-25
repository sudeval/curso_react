import React from 'react'


/** 
 * obtendo a propriedade do elemento pai (clone) 
 * {React.cloneElement(props.children, props)}
*/
export default props => (
    <div>
        <h1>Família</h1>
        {React.cloneElement(props.children, {...props})}
    </div>

)