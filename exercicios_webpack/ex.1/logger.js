/* Usando o sistema de modulos do CommonsJS*/
/* ES 2015 - back-tick */
function info(text) {
    console.log(`INFO: ${text}`)
}

/* exportar ES 2015 (antigo) 
module.exports = {info: info} */

/* exportar ES 2015 (atual/reduziada) */
module.exports = {info}
