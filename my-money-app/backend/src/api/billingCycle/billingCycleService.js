const BillingCycle = require('./billingCycle')

// post (criar) verifica os campos obrigatorios (required)
// put (atualizar) ignora essa validacao dos obrigatorios
BillingCycle.methods(['get', 'post', 'put', 'delete'])

// quando retorna, ele retorna o objeto antigo (por padrao)
// para retornar o novo, deve ser definido o new: true
// runValidators: true é para executar as validações tb no update
BillingCycle.updateOptions({new:true, runValidators:true})

BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        // padronizando o retorno do erro
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json({ value })
        }
    })
})

BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate({
        $project: { credit: { $sum: "$credits.value" }, debt: { $sum: "$debts.value" } }
    }, {
            $group: { _id: null, credit: { $sum: "$credit" }, debt: { $sum: "$debt" } }
        }, {
            $project: { _id: 0, credit: 1, debt: 1 }
        }, (error, result) => {
            if (error) {
                res.status(500).json({ errors: [error] })
            } else {
                res.json(result[0] || { credit: 0, debt: 0 })
            }
        })
})

module.exports = BillingCycle;