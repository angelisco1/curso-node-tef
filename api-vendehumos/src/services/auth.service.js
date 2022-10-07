const uuid4 = require('uuid').v4
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../../config')
const InvalidCredentialsError = require('../errors/invalid-credentials.error')

class AuthService {
  constructor({ usuariosRepository }) {
    this.usuariosRepository = usuariosRepository
  }

  async login(email, password) {
    const usuario = await this.usuariosRepository.findByEmail(email)
    if (!usuario) {
      throw new InvalidCredentialsError()
    }
    const isEqual = await bcrypt.compare(password, usuario.password)
    if (!isEqual) {
      throw new InvalidCredentialsError()
    }

    const { password: _, _id, ...usuarioSinPassword } = usuario
    const token = await jwt.sign({ ...usuarioSinPassword, id: _id }, config.SESSION_SECRET)

    return token
  }

  async register(newUsuario) {
    const userId = uuid4()
    newUsuario._id = userId
    newUsuario.password = await bcrypt.hash(newUsuario.password, 6)
    const usuarioCreated = await this.usuariosRepository.create(newUsuario)
    return usuarioCreated
  }
}

module.exports = AuthService