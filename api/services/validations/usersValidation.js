var erro = []
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
module.exports = {

    userValidator(name,email,senha) {
        if(name===null || typeof name === undefined){
            erro.push('Nome Inválido')
        }       
        if(senha===null || typeof senha === undefined){
            erro.push('Senha Inválida')
        }
        if(validateEmail(email)==false){
            erro.push('Email Inválido')
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
