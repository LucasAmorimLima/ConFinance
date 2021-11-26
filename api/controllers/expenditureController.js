const Expenditure = require('../models/ExpenditureModel')
const validator = require('../services/validations/revenuesValidator')

   exports.index = (req, res, next) => {
    Expenditure.findAll().then((result)=>{
         res.send(result)
         //implementation
     }).catch((error)=>{
         res.send(error)
         //implementation
     }) 
    }  

    exports.show = (req, res, next) => {
        Expenditure.findAll({where: {id: req.params.id}}).then((result)=>{
         res.send(result)
         //implementation
     }).catch((error)=>{
         //implementation
     }) 
    };
    exports.insert  =  async (req, res, next) => {  
      const data = req.body
      if(validator.expenditureValidator(data.nome, data.capital, data.diaDeRecebimento)){             
         
         await  Expenditure.create({ 
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
    };
    
   exports.destroy = (req, res, next) => {
    Expenditure.destroy({where: {id:req.body.id}}).then((result)=>{
         res.send(result)
     }).catch ((err) =>{
         console.log(err)
         res.send(err)
         //implementation
     })
        
   };  

    
    
    