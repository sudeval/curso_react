import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import LabelAndInput from '../common/form/labelAndInput'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { init } from './billingCycleActions'
import CreditList from './creditList'

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit, readOnly, credits } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name='month' component={LabelAndInput} readOnly={readOnly}
                        label='Mês' cols='12 4' placeholder='Informe o mês' type='number'/>
                    <Field name='year' component={LabelAndInput}  readOnly={readOnly}
                        label='Ano' cols='12 4' placeholder='Informe o ano' type='number'/>

                    <CreditList cols='12 6' list={credits} readOnly={readOnly}/>
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default'
                        onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}
// export default reduxForm({ form: 'billingCycleForm' })(BillingCycleForm)
BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const mapDispatchToProps = dispatch => bindActionCreators ( {init}, dispatch)

// pegando propriedades do estado do redux-form
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({ credits: selector(state, 'credits') })
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)