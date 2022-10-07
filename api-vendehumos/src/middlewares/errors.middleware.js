const getResponseErrorData = require("../factories/response-error.factory")

const errorsMiddleware = (err, req, res, next) => {
  console.log('MIDDLEWARE DE ERRORES')
  const { codigo, msg } = getResponseErrorData(err)
  res.status(codigo).json({ msg })
}

module.exports = errorsMiddleware