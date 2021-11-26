const usersController = require('../api/controllers/loginController')
const express = require('express')
const router = express.Router()

router.post('/',usersController.authentication)

module.exports = router 