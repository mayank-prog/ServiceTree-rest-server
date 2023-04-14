const twilio = require('twilio');
const { ACCOUN_SID, AUTH_TOKEN , TWILLLIO_NUMBER} = require('../config.js');
 
//seting client..
const client = twilio(ACCOUN_SID,AUTH_TOKEN);

async function sendOtpBytwilio(phoneNumber, otp) {
    const message = `${otp} is your verification code for ServiceTree.`;
    try {
      const result =  await client.messages.create({
                    body: message,
                    from: TWILLLIO_NUMBER,
                    to: phoneNumber,
                    });
       return result; 
     }catch (error) {
        return error; 
    }
}

function generateOTP(otp_length){
    let OTP = Math.floor(100000 + Math.random() * 900000);
    return OTP;
};

    
module.exports = {
    sendOtpBytwilio, generateOTP
};

