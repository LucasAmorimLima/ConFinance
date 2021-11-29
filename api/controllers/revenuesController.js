const Revenues = require('../models/RevenuesModel')
const {revenuesValidator,erro} = require('../services/validations/revenuesValidator')

   exports.index = async (req, res, next) => {
      await Revenues.findAll().then((result)=>{
         res.send(result)
         //implementation
     }).catch((error)=>{
         exptions.push(500,error)
         next();
     }) 
    }  

    exports.show = async (req, res, next) => {
      await Revenues.findAll({where: {id: req.params.id}}).then((result)=>{
         res.send(result)
         //implementation
     }).catch((error)=>{
         exptions.push(500,error)
         next();
     }) 
    };
    exports.insert  =  async (req, res, next) => {  
      const data = req.body
      if(revenuesValidator(data.nome, data.capital, data.diaDeRecebimento)){             
         await  Revenues.create({ 
            nome: data.nome,
            capital: data.capital,
            diaDeRecebimento: data.diaDeRecebimento,
         }).then((result)=>{
            res.send(result)
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
      await Revenues.destroy({where: {id:req.body.id}}).then((result)=>{
         res.send(result)
     }).catch ((error) =>{
         exptions.push(500,error)
         next();n
     })
        
   };  

    
    
    