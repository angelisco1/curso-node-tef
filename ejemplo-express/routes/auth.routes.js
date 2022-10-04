const express = require('express')
const AuthRouter = express.Router()

const usuarioValido = { email: 'cfalco@gmail.com', password: '1234' }

AuthRouter.post('/login', (req, res, next) => {
  const { email, password } = req.body

  if (email === usuarioValido.email && password === usuarioValido.password) {
    return res.json({ token: '12344566kalsdlajsk' })
  }

  res.status(401).json({ msg: 'datos de login invalidos' })
})

module.exports = AuthRouter