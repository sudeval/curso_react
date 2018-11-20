const express = require('express')
const auth = require('./auth')

// receber o servidor como parametro
// (senao teria que criar um novo diferente do definido em server)
module.exports = function (server) {

    /*
     * Rotas protegidas por Token JWT
     */
    const protectedAPI = express.Router();
    server.use("/api", protectedAPI)

    // definindo o middleware/filtro de autenticacao/validacao
    protectedAPI.use(auth)


    // Rotas do ciclo de pagamento (/api/billingCycles)
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(protectedAPI, '/billingCycles')
    // como register ele cria os métodos definidos em BillingCycle.methods


    /**
     * Rotas abertas
     */
    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../api/user/AuthService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)
}