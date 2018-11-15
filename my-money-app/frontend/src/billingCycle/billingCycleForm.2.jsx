import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import labelAndInput from '../common/form/labelAndInput'

import { init } from './billingCycleActions'

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={labelAndInput}
                        label='Nome' cols='12 4' placeholder='Informe o nome'/>
                    <Field name='month' component={labelAndInput} 
                        label='Mês' cols='12 4' placeholder='Informe o mês' type='number'/>
                    <Field name='year' component={labelAndInput} 
                        label='Ano' cols='12 4' placeholder='Informe o ano' type='number'/>
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'
                    >Enviar</button>
                    <button type='button' className='btn btn-primary' onClick={this.props.init}
                    >Cancelar</button>
                </div>
            </form>
        )
    }
}
// export default reduxForm({ form: 'billingCycleForm' })(BillingCycleForm)
export default reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
// nao destruir os dados enquanto eh montando (caso de reaproveitar o form no criar e atualizar)