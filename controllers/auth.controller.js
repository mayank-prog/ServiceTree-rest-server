const User = require('../models/user.model.js');
const { generateOTP, sendOtpBytwilio } = require("../utils/authlogin");
const jwt = require('jsonwebtoken');
const {JWT_KEY, JWT_ALGRIOTHM} = require('../config.js');
const http = require('http');

exports.Login = async (req, res) => {
    const  phone = "+91" +req.body.phone;
    if(!phone){
        return res.status(422).json({error: "Plz filled the field properly"});
    }
    else{
        const otp = generateOTP(6);
        User.findOne({phone:phone})
            .then((userExist)=>{
                if(userExist){
                    User.findByIdAndUpdate(userExist._id, { phoneOtp: otp })
                     .then(()=>{
                          
                     }).catch((err)=> {
                         return res.status(500).json({error: err});
                    })
                    sendOtpBytwilio(phone,otp);
                    return res.status(200).json({error: "User already exist",otp:otp});
                }
                else {
                const user = new User({phone:phone,phoneOtp:otp,isVerifyed:false});
                user.save().then(()=>{
                    // return res.status(422).json({error:"User  added"});
                }).catch((err)=> {return res.status(500).json({error: "not added user"});})
                sendOtpBytwilio(phone,otp);
                return res.json({Data: "i am a new user",otp:otp});
            }
            }).catch((err)=>{console.error(err);})
      }
};


exports.verifyOTP = async (req, res) => {

    const phoneNumber = "+91" +req.body.phone;
    const OTP = req.body.otp;
    try {
      // Find the user in the database
      const user = await User.findOne({phone:phoneNumber})
      // Check if the OTP is correct
      if (user.phoneOtp == OTP) {
        // Generate JWT token
        const payload = {
            userId: phoneNumber
          }; 
        const authToken = jwt.sign(payload, JWT_KEY, { algorithm: JWT_ALGRIOTHM }, {expiresIn: '1h'});
        User.findByIdAndUpdate(user._id, { isVerifyed:true })
                     .then(()=>{
                        
                     }).catch((err)=> {
                         return res.status(500).json({error: err});
                    }) 
        
        // res.setHeader('Authorization', authToken);             
        res.status(200).json({ "user" : user,"token": authToken });
        const user1 = await User.findOne({phone:phoneNumber})
      } else {
        res.status(401).json({ message: 'Invalid OTP' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to verify OTP' });
    }
};
