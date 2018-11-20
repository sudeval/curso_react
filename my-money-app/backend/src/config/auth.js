// middleware para validar o token enviado na requisicao
const jwt = require('jsonwebtoken')
const env = require('../.env')

module.exports = (req, res, next) => {
    // CORS preflight request
    if (req.method === 'OPTIONS') {
        // nao invalida o OPTIONS, vai para o proximo filtro
        next()
    } else {
        const token = req.body.token || req.query.token || req.headers['authorization']
        if (!token) {
            return res.status(403).send({ errors: ['No token provided.'] })
        }
        // token existe, entao vai ser validado.
        jwt.verify(token, env.authSecret, function (err, decoded) {
            if (err) {
                return res.status(403).send({
                    errors: ['Failed to authenticate token.']
                })
            } else {
                // passando o token decodificado
                req.decoded = decoded
                next()
            }
        })
    }
}