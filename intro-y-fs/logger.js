const fsPromises = require('fs').promises

const info = (msg) => {
  const log = `INFO - ${getCurrentDate()}:: ${msg}\n`
  console.info(log)
  guardarLogs(log)
}

const warning = (msg) => {
  const log = `WARNING - ${getCurrentDate()}:: ${msg}\n`
  console.warn(log)
  guardarLogs(log)
}

const error = (msg) => {
  const log = `ERROR - ${getCurrentDate()}:: ${msg}\n`
  console.error(log)
  guardarLogs(log)
}

const guardarLogs = (log) => {
  fsPromises.appendFile('files/logs.txt', log)
}

const getCurrentDate = () => {
  return new Date().toLocaleString()
}

module.exports = {
  info,
  warning,
  error
}