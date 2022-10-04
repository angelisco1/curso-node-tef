const express = require('express')
const AuthRouter = require('./auth.routes')
const CuadrosRouter = require('./cuadros.routes')
const AppRouter = express.Router()

AppRouter.use(CuadrosRouter)
AppRouter.use(AuthRouter)

module.exports = AppRouter