const VendehumosRouter = require('express').Router()
const container = require('../helpers/setup-di')
const authMiddleware = require('../middlewares/auth.middleware')
// const VendehumosController = require('../controllers/vendehumos.controller')

const vendehumosController = container.resolve('vendehumosController')

// VendehumosRouter.get('/vendehumos', VendehumosController.getVendehumos)
VendehumosRouter.get('/vendehumos', vendehumosController.getVendehumos.bind(vendehumosController))
VendehumosRouter.get('/vendehumos/:vendehumosId', vendehumosController.getVendehumo.bind(vendehumosController))



VendehumosRouter.get('/nuevo-vendehumo', authMiddleware, vendehumosController.getFormularioVendehumo.bind(vendehumosController))
VendehumosRouter.post('/vendehumos', authMiddleware, vendehumosController.postVendehumos.bind(vendehumosController))





VendehumosRouter.post('/update-votos-vendehumos/:vendehumosId', vendehumosController.patchVotosVendehumo.bind(vendehumosController))
// VendehumosRouter.patch('/vendehumos/:vendehumosId', VendehumosController.patchVotosVendehumo)

module.exports = VendehumosRouter