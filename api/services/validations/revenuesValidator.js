const moment = require('moment')
var erro = []

module.exports = {

    revenuesValidator(nome,capital,diaDeRecebimento) {
        if(nome===null || typeof nome === undefined){
            erro.push('Nome Inválido')
            console.log('1')
        }       
        if(capital===null || typeof capital === undefined){
            erro.push("Valor inválido")
            console.log('2')
        }
        if(moment(diaDeRecebimento, 'YY/MM/DD',true).isValid()){
         erro.push('Data inválida')
         console.log('3')
        }
        if(erro.length>0){
            console.log('f')
            return false
        }
        else{
            console.log('t')
            return true
        }
    },
    erro: erro
}