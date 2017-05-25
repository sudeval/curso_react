import React from 'react'

// props são as propriedades da tag
export default (props) => (
    <h1>{props.value}</h1>
)

// por ter apenas um parametro poderia ser assim tb 
// export default props => (