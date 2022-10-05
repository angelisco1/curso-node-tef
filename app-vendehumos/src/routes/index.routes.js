const AppRouter = require('express').Router()
const VendehumosRouter = require('./vendehumos.routes')

AppRouter.use(VendehumosRouter)

module.exports = AppRouter