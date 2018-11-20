const express = require('express')

// receber o servidor como parametro
// (senao teria que criar um novo diferente do definido em server)
module.exports = function(server) {

    // URL base para todas as rotas
    const router = express.Router();
    server.use("/api", router)
    
    
    // Rotas do ciclo de pagamento (/api/billingCycles)
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
    // como register ele cria os métodos definidos em BillingCycle.methods

}