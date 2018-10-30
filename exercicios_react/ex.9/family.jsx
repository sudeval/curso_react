import React from 'react'


/** 
 * Recebe/Espera uma string ou um outro objeto, mas não aceita mais de um objeto.
 * {React.cloneElement(props.children, {...props})}
*/
export default props => (
    <div>
        <h1>Família</h1>
        { React.Children.map(props.children,
            child => React.cloneElement(child, {...props}))}
    </div>
)
// poderia usar a funcao utilitaria childrenWithProps de utils/reactUtils.js 
/**
 * Pegando o conjunto de filhos e mesclando a propriedade do pai com o filho.
 * No final a propriedade do pai (lastName) é adicionada ao filho.
 * { React.Children.map(props.children,
 *       child => React.cloneElement(child, {...props}))}
 */