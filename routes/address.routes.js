const express = require('express');
const router = express.Router();
const addressController = require('../controllers/address.controller.js');

//Route for get all addresses..
router.get('/all',addressController.all_Addresses);

//Route for get by id address..
router.get("/byUserID/:user_id" ,addressController.address_By_UserId);


//Route for post address..
router.post('/add',addressController.add_Address);

//Route for put address...
router.put("/:id" ,addressController.update_Address);


module.exports = router;
