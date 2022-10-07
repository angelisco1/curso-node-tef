const InvalidCredentialsError = require("../errors/invalid-credentials.error")
const jwt = require('jsonwebtoken')
const config = require("../../config")

const authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers
  if (!authorization) {
    return next(new InvalidCredentialsError)
  }

  try {
    const payload = await jwt.verify(authorization, config.SESSION_SECRET)
    console.log({ payload })
    next()
  } catch (err) {
    next(new InvalidCredentialsError)
  }
}

module.exports = authMiddleware