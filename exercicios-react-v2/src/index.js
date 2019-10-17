import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import PrimeiroComponente from './componentes/PrimeiroComponente'
import {componenteA as ComponenteA, componenteB as ComponenteB} from './componentes/DoisComponentes'
import MultiElementos from './componentes/MultiElementos'
import Contador from './componentes/ContadorComEstado';

const element = document.getElementById('root');
ReactDOM.render(
    <div>
            <Contador numeroInicial={100} />
    {/* <ComponenteA valor="Oxi"/> */}
    {/* <ComponenteB valor="Oxi 2"/> */}
    </div>, element);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
