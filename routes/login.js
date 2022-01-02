const usersController = require('../api/controllers/loginController')
const express = require('express')
const router = express.Router()

router.post('/authentication',usersController.authentication)

module.exports = router 