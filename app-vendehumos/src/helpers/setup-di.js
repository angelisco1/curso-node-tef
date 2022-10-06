const awilix = require('awilix')
const VendehumosMySqlRepository = require('../repositories/vendehumos-mysql.repository')
const VendehumosService = require('../services/vendehumos.service')
const VendehumosController = require('../controllers/vendehumos.controller')
const VendehumosMongoRepository = require('../repositories/vendehumos-mongo.repository')
const AuthController = require('../controllers/auth.controller')
const AuthService = require('../services/auth.service')
const UsuariosMongoRepository = require('../repositories/usuarios-mongo.repository')

const container = awilix.createContainer()

container.register({
  // vendehumosRepository: awilix.asClass(VendehumosMySqlRepository).singleton(),
  usuariosRepository: awilix.asClass(UsuariosMongoRepository).singleton(),
  vendehumosRepository: awilix.asClass(VendehumosMongoRepository).singleton(),

  vendehumosService: awilix.asClass(VendehumosService).singleton(),
  authService: awilix.asClass(AuthService).singleton(),

  vendehumosController: awilix.asClass(VendehumosController).singleton(),
  authController: awilix.asClass(AuthController).singleton(),
})

module.exports = container