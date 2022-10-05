const VendehumosController = require('../controllers/vendehumos.controller')

const VendehumosRouter = require('express').Router()

VendehumosRouter.get('/vendehumos', VendehumosController.getVendehumos)
VendehumosRouter.get('/vendehumos/:vendehumosId', VendehumosController.getVendehumo)
VendehumosRouter.post('/vendehumos', VendehumosController.postVendehumos)
VendehumosRouter.patch('/vendehumos/:vendehumosId', VendehumosController.patchVotosVendehumo)

module.exports = VendehumosRouter