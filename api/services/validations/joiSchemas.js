const Joi = require('joi');

//const name = Joi.string().regex(/^[A-Z]+ [A-Z]+$/i).uppercase().required()
const name =  Joi.string().alphanum().min(3).max(30).required()
const data  = Joi.date().default(() => moment().format())
const capital = Joi.number().required()

const usersSchema = Joi.object({
    name : name,
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(7).required().strict(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required().strict()
});
const loginSchema = Joi.object({
    
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(7).required().strict(),
    
});
const revenuesSchema = Joi.object({
    name : name,
    capital : capital,
    receiptDay : data

});
const expenditureSchema = Joi.object({
    name : name,
    capital : capital,
    captalDay : data

});

module.exports = {
    '/authentication' : loginSchema,
    '/add-user' : usersSchema,
    '/add-revenues' : revenuesSchema,
    '/add-expenditure' : expenditureSchema
}