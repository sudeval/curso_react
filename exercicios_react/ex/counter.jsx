import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {inc, dec, stepChanged} from './counterAction'

const Counter = (props) => (
    <div>
        <h1>{props.counter.number}</h1>
        <input type='number' onChange={props.stepChanged} value={props.counter.step} />
        <button onClick={props.dec}>Dec</button>
        <button onClick={props.inc}>Inc</button>
    </div>
)
// antigo conteudo de Counter: <div>Ok</div>


const mapStateToProps = state => ({counter: state.counter})

const mapDispatchToProps = 
    dispacth => bindActionCreators({
        inc,
        dec,
        stepChanged
    }, dispacth)

// export default Counter;

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// chamada da primeira funcao
// export default connect(mapStateToProps, mapDispatchToProps)
// chamada da segunda funcao (o retorno da primeira é uma funcao)
// export default funcao_retornada_da_primeira(Counter)