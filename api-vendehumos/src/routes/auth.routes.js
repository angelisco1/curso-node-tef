const AuthRouter = require('express').Router()
const container = require('../helpers/setup-di')

const authController = container.resolve('authController')


AuthRouter.post('/login', authController.postLogin.bind(authController))

AuthRouter.post('/register', authController.postRegister.bind(authController))

module.exports = AuthRouter