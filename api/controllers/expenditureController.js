const Expenditure = require('../models/ExpenditureModel')
const {expenditureValidator,erro} = require('../services/validations/ExpenditureValidator')

   exports.index = async (req, res, next) => {
    await Expenditure.findAll().then((result)=>{
         res.send(result)
         //implementation
     }).catch((error)=>{
        exptions.push(500,error)
        next();
     }) 
    }  

    exports.show = async (req, res, next) => {
        await Expenditure.findAll({where: {id: req.params.id}}).then((result)=>{
         res.send(result)
         //implementation
     }).catch((error)=>{
        exptions.push(500,error)
        next();
     }) 
    };
    exports.insert  =  async (req, res, next) => {  
      const data = req.body
      if(expenditureValidator(data.nome, data.capital, data.diaDeRecebimento)){             
         
         await  Expenditure.create({ 
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
    
   exports.destroy = (req, res, next) => {
    Expenditure.destroy({where: {id:req.body.id}}).then((result)=>{
         res.send(result)
     }).catch ((error) =>{
        exptions.push(500,error)
        next();
     })
        
   };  

    
    
    