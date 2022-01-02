const Revenues = require('../models/RevenuesModel')


   exports.index = async (req, res, next) => {
      await Revenues.findAll()  .then((result)=>{
         return res.status(200).json(result)
     }).catch ((error) =>{
         return res.status(400).json(error)
     }) 
    }  

    exports.show = async (req, res, next) => {
      await Revenues.findAll({where: {id: req.params.id}})  .then((result)=>{
         return res.status(200).json(result)
     }).catch ((error) =>{
         return res.status(400).json(error)
     }) 
    };
    exports.insert  =  async (req, res, next) => {  
      const data = req.body        
         await  Revenues.create({ 
            name: data.name,
            capital: data.capital,
            diaDeRecebimento: data.diaDeRecebimento,
         })  .then((result)=>{
            return res.status(200).json(result)
        }).catch ((error) =>{
            return res.status(400).json(error)
        }) 
    };
    
   exports.destroy = async (req, res, next) => {
      await Revenues.destroy({where: {id:req.body.id}})  .then((result)=>{
         return res.status(200).json(result)
     }).catch ((error) =>{
         return res.status(400).json(error)
     }) 
        
   };  

    
    
    