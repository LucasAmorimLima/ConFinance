const usersController = require('../api/controllers/usersController')
const express = require('express')
const router = express.Router()


router.post('/add-user',usersController.insert)
router.get('/',usersController.index)
router.get('/:id',usersController.show)
router.delete('/',usersController.destroy)

module.exports = router 