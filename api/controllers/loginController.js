const {loginValidator} = require('../services/validations/loginValidation')
const {generateJWT} = require('../services/generateJWT')
const Users = require('../models/UsersModel')


exports.authentication  =  async (req, res, next) => {  
    const data = req.body
  
    if(loginValidator(data.email, data.senha)){             
       
        await Users.findAll({where: {senha: req.body.senha,email: req.body.email}}).then((result)=>{
                    
            return res.json({auth: true, id:result[0].id, nome:result[0].nome, token: generateJWT(result[0].id)})                    
        }).catch((error)=>{
            exptions.push(500,error)
            next();
            })
                
        }
};

 



