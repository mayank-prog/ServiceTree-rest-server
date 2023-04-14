const jwt = require('jsonwebtoken')
const { jwtToken } = require('../config')

function authenticate(req, res, next) {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    return res.status(401).send({ error: 'Missing Authorization header' })
  }
  const token = authHeader.split(' ')[1]
  jwt.verify(token, jwtToken, (err, decoded) => {
    if (err) {
      return res.status(401).send({ error: 'Invalid token' })
    }
    req.user = decoded
    next()
  })
}

module.exports = { authenticate }