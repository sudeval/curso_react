import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <div>
        <Family >
            <Member name="Tiago" lastName="Sudeval" />
        </ Family>
    </div>
    , document.getElementById('app'))