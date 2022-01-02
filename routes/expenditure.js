const expenditureController = require('../api/controllers/expenditureController')
const express = require('express')
const router = express.Router()


router.post('/add-expenditure',expenditureController.insert)
router.get('/',expenditureController.index)
router.get('/:id',expenditureController.show)
router.delete('/',expenditureController.destroy)

module.exports = router 