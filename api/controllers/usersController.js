const {generateJWT} = require('../services/generateJWT')
const Users = require('../models/UsersModel')
const validator = require('../services/validations/usersValidation')
   exports.index = (req, res, next) => {
        Users.findAll().then((result)=>{
            res.send(result)
            //implementation
        }).catch((error)=>{
            res.send(error)
            //implementation
        }) 
    }  

    exports.show = (req, res, next) => {
        Users.findAll({where: {id: req.params.id}}).then((result)=>{
            res.send(result)
            //implementation
        }).catch((error)=>{
            //implementation
        }) 
    };
    exports.insert  =  async (req, res, next) => {  
        const data = req.body
        if(validator.userValidator(data.nome, data.email, data.senha)){             
                await  Users.create({
                        nome: data.nome,
                        senha: data.senha,
                        email: data.email,
                    }).then((result)=>{
                        res.send(generateJWT({id :Users.id}))
                        //implementation
                    }).catch((err)=>{
                        console.log(err)
                        //implementation
                    })
                    
            }
    };
    
    exports.destroy = (req, res, next) => {

        Users.destroy({where: {id:req.body.id}}).then((result)=>{
            res.send(result)
        }).catch ((err) =>{
            console.log(err)
            res.send(err)
            //implementation
        })
    };  

    
    
    