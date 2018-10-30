import React from 'react'

function childrenWithProps(children, props) {
    return React.Children.map(children,
        child => React.cloneElement(child, {...props}))
}

function childrenWithPropsSimplified(props) {
    return React.Children.map(props.children,
        child => React.cloneElement(child, {...props}))
}

// não usou o default para não arrar nenhum como padrão do arquivo utilitario.
export { childrenWithProps, childrenWithPropsSimplified }