const InvalidFormatError = require("../errors/invalid-format.error")
const NotFoundError = require("../errors/not-found.error")

const getResponseErrorData = (err) => {
  if (err instanceof NotFoundError) {
    return { codigo: 404, msg: err.message }
  } else if (err instanceof InvalidFormatError) {
    return { codigo: 400, msg: err.message }
  } else {
    return { codigo: 500, msg: 'Internal server error' }
  }
}

module.exports = getResponseErrorData