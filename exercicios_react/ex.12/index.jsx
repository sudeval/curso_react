import React from 'react'
import ReactDOM from 'react-dom'

import ClassComponent from './classComponent'

ReactDOM.render(
    <div>
        <ClassComponent label='Contador' initialValue={10}/>
    </div>
    , document.getElementById('app'))