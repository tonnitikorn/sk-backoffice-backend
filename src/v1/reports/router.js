const express = require('express');
const router = express.Router();
const reportServices = require('./controller');

//middleware
const passport = require('../../middleware/passport');

//createTransaction
router.post('/create_transaction', reportServices.createTransaction);
//getTransaction
router.post('/get_transaction', reportServices.listTransactionByTransferType);




module.exports = router;