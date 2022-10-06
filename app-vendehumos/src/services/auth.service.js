const uuid4 = require('uuid').v4
const bcrypt = require('bcrypt')

class AuthService {
  constructor({ usuariosRepository }) {
    this.usuariosRepository = usuariosRepository
  }

  async login(email, password) {
    const usuario = this.usuariosRepository.findByEmail(email)
    if (!usuario) {
      throw new Error('No existe un usuario con ese email')
    }
    const isEqual = await bcrypt.compare(password, usuario.password)
    if (!isEqual) {
      throw new Error('La contraseña es erronea')
    }

    const { password: _, ...usuarioSinPassword } = usuario
    return usuarioSinPassword
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