const revenuesController = require('../api/controllers/revenuesController')
const express = require('express')
const { verifyJWT } = require('./midlewares')
const router = express.Router()
const SchemaValidator = require('../api/services/SchemaValidator');
const validateRequest = SchemaValidator(true);

router.post('/add-revenues',verifyJWT,validateRequest,revenuesController.insert)
router.get('/',verifyJWT,revenuesController.index)
router.get('/:id',verifyJWT,revenuesController.show)
router.delete('/',verifyJWT,revenuesController.destroy)

module.exports = router 