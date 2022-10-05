const dotenv = require('dotenv')
const path = require('path')

const entorno = process.env.NODE_ENV || 'development'
const pathEnvfile = path.join(__dirname, `.env.${entorno}`)

dotenv.config({
  path: pathEnvfile
})

module.exports = {
  NODE_ENV: entorno,
  PORT: process.env.PORT,
  MYSQL_HOST: process.env.MYSQL_HOST,
  MYSQL_PORT: process.env.MYSQL_PORT,
  MYSQL_USER: process.env.MYSQL_USER,
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
  MYSQL_DB: process.env.MYSQL_DB,
}