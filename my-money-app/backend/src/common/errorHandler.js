const _ = require('lodash')

// middleware
module.exports = (req, res, next) => {
    // bundle com os erros (quem coloca é o noderestful)
    const bundle = res.locals.bundle

    if (bundle.errors) {
        const errors = parseErrors(bundle.errors)
        res.status(500).json({errors})
    } else {
        next()
    }
}

const parseErrors = (nodeRestfulErrors) => {
    const errors = []
    // pegando apenas a 'mensagem' dos erros.
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors;
}

/* Exemplo do erro retornado
name: Marco/17
month: 20
year: 2200
credits[0][name]: Salario Empresa
credits[0][value]: 8800
credits[1][name]: Salario Professor
credits[1][value]: 3200
debits[0][name]: Telefone
debits[0][value]: 89.56
debits[0][status]: PAGO

{
    "errors": {
      "year": {
        "message": "O '2200' informado é maior que o limite máximo de '2100'.",
        "name": "ValidatorError",
        "properties": {
          "max": 2100,
          "type": "max",
          "message": "O '{VALUE}' informado é maior que o limite máximo de '2100'.",
          "path": "year",
          "value": 2200
        },
        "kind": "max",
        "path": "year",
        "value": 2200,
        "$isValidatorError": true
      },
      "month": {
        "message": "O '20' informado é maior que o limite máximo de '12'.",
        "name": "ValidatorError",
        "properties": {
          "max": 12,
          "type": "max",
          "message": "O '{VALUE}' informado é maior que o limite máximo de '12'.",
          "path": "month",
          "value": 20
        },
        "kind": "max",
        "path": "month",
        "value": 20,
        "$isValidatorError": true
      }
    }, */