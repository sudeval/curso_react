const BillingCycle = require('./billingCycle')

// post (criar) verifica os campos obrigatorios (required)
// put (atualizar) ignora essa validacao dos obrigatorios
BillingCycle.methods(['get', 'post', 'put', 'delete'])

// quando retorna, ele retorna o objeto antigo (por padrao)
// para retornar o novo, deve ser definido o new: true
// runValidators: true é para executar as validações tb no update
BillingCycle.update({new:true, runValidators:true})

module.exports = BillingCycle;