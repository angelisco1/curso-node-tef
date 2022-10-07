const AuthRouter = require('express').Router()
const container = require('../helpers/setup-di')

const authController = container.resolve('authController')

AuthRouter.get('/login', authController.getLogin.bind(authController))
AuthRouter.post('/login', authController.postLogin.bind(authController))

AuthRouter.post('/logout', authController.postLogout.bind(authController))

AuthRouter.get('/register', authController.getRegister.bind(authController))
AuthRouter.post('/register', authController.postRegister.bind(authController))

module.exports = AuthRouter