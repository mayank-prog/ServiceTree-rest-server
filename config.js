const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});


exports.jwtToken = process.env.jwtToken;
exports.PORT = process.env.PORT;
exports.MONGODB_URI = process.env.MONGODB_URI;
exports.ACCOUN_SID = process.env.ACCOUN_SID;
exports.AUTH_TOKEN = process.env.AUTH_TOKEN;
exports.TWILLLIO_NUMBER = process.env.TWILLLIO_NUMBER; 
exports.JWT_KEY = process.env.JWT_KEY;
exports.JWT_ALGRIOTHM = process.env.JWT_ALGRIOTHM;