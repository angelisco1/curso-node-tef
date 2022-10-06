const AppRouter = require('express').Router()
const AuthRouter = require('./auth.routes')
const VendehumosRouter = require('./vendehumos.routes')

AppRouter.use(AuthRouter)
AppRouter.use(VendehumosRouter)

module.exports = AppRouter