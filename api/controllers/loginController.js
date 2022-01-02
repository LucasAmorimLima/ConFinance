
const {generateJWT} = require('../services/generateJWT')
const Users = require('../models/UsersModel')


exports.authentication  =  async (req, res, next) => {  
    const data = req.body
  
    await Users.findAll({where: {password: data.password,email: data.email}}).then((result)=>{
                    
        return res.status(200).json({auth: true, id:result[0].id, name:result[0].name, token: generateJWT(result[0].id)})                    
    }).catch((error)=>{
        return res.status(400).json(error)
    })
                
    .then((result)=>{
        return res.status(200).json(result)
    }).catch ((error) =>{
        return res.status(400).json(error)
    })   
};

 



