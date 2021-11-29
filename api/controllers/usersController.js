const {generateJWT} = require('../services/generateJWT')
const Users = require('../models/UsersModel')
const validator = require('../services/validations/usersValidation')
   exports.index = async (req, res, next) => {
        await Users.findAll().then((result)=>{
            res.send(result)
            //implementation
        }).catch((error)=>{
            exptions.push(500,error)
            next();
        }) 
    }  

    exports.show = async (req, res, next) => {
        await Users.findAll({where: {id: req.params.id}}).then((result)=>{
            res.send(result)
            //implementation
        }).catch((error)=>{
            exptions.push(500,error)
            next();
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
            }).catch((error)=>{
                exptions.push(500,error)
                next();
            })
                    
        }else{
            exptions.push(401,erro)
            next();
        }
    };
    
    exports.destroy = async (req, res, next) => {

        await Users.destroy({where: {id:req.body.id}}).then((result)=>{
            res.send(result)
        }).catch ((error) =>{
            exptions.push(500,error)
            next();
        })
    };  

    
    
    