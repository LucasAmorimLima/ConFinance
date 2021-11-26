const expenditureController = require('../api/controllers/revenuesController')
const express = require('express')
const router = express.Router()


router.post('/',expenditureController.insert)
router.get('/',expenditureController.index)
router.get('/:id',expenditureController.show)
router.delete('/',expenditureController.destroy)

module.exports = router 