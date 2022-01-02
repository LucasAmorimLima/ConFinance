const bodyParser = require('body-parser')
const express = require('express')
const login = require('./routes/login')
const user = require('./routes/user')
const revenues = require('./routes/revenues')
const expenditure = require('./routes/expenditure')
const { PORT } = require('./configs/constants/auth')

// create the server
const app = express();
//configs
    app.use(bodyParser.json())
    app.use('/login',login)
    app.use('/user',user)
    app.use('/revenues',revenues)
    app.use('/expenditure',expenditure)


app.listen(PORT,()=>console.log(`Server Started at Port ${PORT}
=> http://localhost:${PORT}`))