const Revenues = require('../models/RevenuesModel')
const validator = require('../services/validations/revenuesValidator')

   exports.index = (req, res, next) => {
      Revenues.findAll().then((result)=>{
         res.send(result)
         //implementation
     }).catch((error)=>{
         res.send(error)
         //implementation
     }) 
    }  

    exports.show = (req, res, next) => {
      Revenues.findAll({where: {id: req.params.id}}).then((result)=>{
         res.send(result)
         //implementation
     }).catch((error)=>{
         //implementation
     }) 
    };
    exports.insert  =  async (req, res, next) => {  
      const data = req.body
      if(validator.revenuesValidator(data.nome, data.capital, data.diaDeRecebimento)){             
         console.log('1')
         await  Revenues.create({ 
            nome: data.nome,
            capital: data.capital,
            diaDeRecebimento: data.diaDeRecebimento,
         }).then((result)=>{
            res.send(result)
            //implementation
         }).catch((err)=>{
            console.log(err)
                      //implementation
            })
         } 
         else{
            console.log(validator.error)
         }
    };
    
   exports.destroy = (req, res, next) => {
      Revenues.destroy({where: {id:req.body.id}}).then((result)=>{
         res.send(result)
     }).catch ((err) =>{
         console.log(err)
         res.send(err)
         //implementation
     })
        
   };  

    
    
    