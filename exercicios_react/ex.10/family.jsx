import React from 'react'
import {childrenWithProps, childrenWithPropsSimplified} from '../utils/reactUtils'


export default props => (
    <div>
        <h1>Família</h1>
        { childrenWithPropsSimplified(props) }
    </div>
)

// { childrenWithProps(props.children, props) }