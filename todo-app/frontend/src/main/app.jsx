// modules é o alias para a pasta node_modules configurado no webpack.config.js
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'

export default props => (
    <div className='container'>
        <h1>Teste</h1>
    </div>
)