const Expenditure = require('../models/ExpenditureModel')


   exports.index = async (req, res, next) => {
    await Expenditure.findAll().then((result)=>{
      return res.status(200).json(result)
  }).catch ((error) =>{
      return res.status(400).json(error)
  })
    }  

    exports.show = async (req, res, next) => {
        await Expenditure.findAll({where: {id: req.params.id}})  .then((result)=>{
         return res.status(200).json(result)
     }).catch ((error) =>{
         return res.status(400).json(error)
     }) 
    };
    exports.insert  =  async (req, res, next) => {  
      const data = req.body
         await  Expenditure.create({ 
            name: data.name,
            capital: data.capital,
            paymentDay: data.paymentDay,
         })  .then((result)=>{
            return res.status(200).json(result)
        }).catch ((error) =>{
            return res.status(400).json(error)
        }) 
    };
    
   exports.destroy = (req, res, next) => {
    Expenditure.destroy({where: {id:req.body.id}}).then((result)=>{
      return res.status(200).json(result)
  }).catch ((error) =>{
      return res.status(400).json(error)
  })
        
   };  

    
    
    