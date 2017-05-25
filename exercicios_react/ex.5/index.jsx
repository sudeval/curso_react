import React from 'react'
import ReactDOM from 'react-dom'
// 1a e 2a maneira
// import { Primeiro, Segundo } from './component'
import Primeiro, { Segundo } from './component'

// precisa retornar apenas um component (div agrupando)
ReactDOM.render(
    <div>
        <Primeiro value="Show!"/>
        <Segundo />
    </div>
    , document.getElementById('app'))