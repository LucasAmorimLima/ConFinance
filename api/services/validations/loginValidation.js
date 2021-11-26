var erro = []
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
module.exports = {

    loginValidator(email,senha) {
        console.log(email,senha)       
        if(senha===null || typeof senha === undefined){
            erro.push('Senha Inválida')
        }
        if(validateEmail(email)==false){
            erro.push('Email Inválido')
        }
        if(erro.length>0){
            console.log("err")
            return false
        }
        else{
            console.log("true")
            return true
        }
    },
    error: erro
}
