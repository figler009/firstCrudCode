'use strict'

let express = require('express');
let SmartPhoneController = require('../controllers/smartPhoneController');

let router = express.Router();

//routes
router.get('/smartphones',SmartPhoneController.getSmartphones);
router.get('/smartphone/:_id',SmartPhoneController.getSmartphone);

router.post('/save',SmartPhoneController.save);
router.put('/update/:_id',SmartPhoneController.update);
router.delete('/delete/:_id',SmartPhoneController.delele);
module.exports = router;