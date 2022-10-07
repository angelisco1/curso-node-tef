const VendehumosRouter = require('express').Router()
const container = require('../helpers/setup-di')
const authMiddleware = require('../middlewares/auth.middleware')

const vendehumosController = container.resolve('vendehumosController')

VendehumosRouter.get('/vendehumos', vendehumosController.getVendehumos.bind(vendehumosController))
VendehumosRouter.get('/vendehumos/:vendehumosId', vendehumosController.getVendehumo.bind(vendehumosController))
VendehumosRouter.post('/vendehumos', authMiddleware, vendehumosController.postVendehumos.bind(vendehumosController))
VendehumosRouter.patch('/vendehumos/:vendehumosId', authMiddleware, vendehumosController.patchVotosVendehumo.bind(vendehumosController))

module.exports = VendehumosRouter