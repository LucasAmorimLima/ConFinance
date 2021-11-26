const moment = require('moment')
var erro = []

module.exports = {

    revenuesValidator(nome,capital,diaDePagamento) {
        if(nome===null || typeof nome === undefined){
            erro.push('Nome Inválido')
        }       
        if(capital===null || typeof capital === undefined){
            erro.push("Valor inválido")
        }
        if(moment(diaDePagamento, 'YY/MM/DD',true).isValid()){
         erro.push('Data inválida')
        }
        if(erro.length>0){
            
            return false
        }
        else{
            return true
        }
    },
    error: erro
}