const bodyParser = require('body-parser')
const express = require('express')
const login = require('./routes/login')
const user = require('./routes/user')
const revenues = require('./routes/revenues')
const expenditure = require('./routes/expenditure')

// create the server
const app = express();
//configs
    app.use(bodyParser.json())
    app.use('/login',login)
    app.use('/usuario',user)
    app.use('/receita',revenues)
    app.use('/receita',expenditure)
    
const PORT = 8081
app.listen(PORT,()=>{})