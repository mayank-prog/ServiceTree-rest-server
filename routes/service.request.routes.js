const express = require('express');
const router = express.Router();
const service_request_Controller = require('../controllers/service.request.controller.js');

//Route for get all addresses..
router.get('/all',service_request_Controller.all_service_request);

// Route for get by id address..
router.get("/byUserID/:user_id" ,service_request_Controller.service_requestByUserId);


//Route for post address..
router.post('/add',service_request_Controller.add_service_request);

//Route for put address...
router.put("/:id" ,service_request_Controller.update_service_request);


module.exports = router;