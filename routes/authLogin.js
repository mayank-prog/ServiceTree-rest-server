const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller.js');

// Route for sending OTP for login and sign up to....
router.post('/login-and-signup', authController.Login);

// Route for verifying OTP...
router.post('/verifyOTP', authController.verifyOTP);

module.exports = router;