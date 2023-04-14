const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});

function auth(req, res, next) {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).send('Access Denied');
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_KEY);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Invalid Token');
  }
}

module.exports = auth;