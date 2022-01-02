const revenuesController = require('../api/controllers/revenuesController')
const express = require('express')
const router = express.Router()


router.post('/add-revenues',revenuesController.insert)
router.get('/',revenuesController.index)
router.get('/:id',revenuesController.show)
router.delete('/',revenuesController.destroy)

module.exports = router 