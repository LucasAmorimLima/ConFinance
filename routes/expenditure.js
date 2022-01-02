const expenditureController = require('../api/controllers/expenditureController')
const express = require('express')
const { verifyJWT } = require('./midlewares')
const router = express.Router()
const SchemaValidator = require('../api/services/SchemaValidator');
const validateRequest = SchemaValidator(true);

router.post('/add-expenditure',verifyJWT,validateRequest,expenditureController.insert)
router.get('/',verifyJWT,expenditureController.index)
router.get('/:id',verifyJWT,expenditureController.show)
router.delete('/',verifyJWT,expenditureController.destroy)

module.exports = router 