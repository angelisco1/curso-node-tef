class InvalidCredentialsError extends Error {
  constructor() {
    super('Las credenciales son incorrectas')
  }
}

module.exports = InvalidCredentialsError