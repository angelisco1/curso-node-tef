class AuthController {
  constructor({ authService }) {
    this.authService = authService
  }

  async postLogin(req, res, next) {
    const { email, password } = req.body
    try {
      const token = await this.authService.login(email, password)
      res.json({ jwt: token })
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  async postRegister(req, res) {
    const newUsuario = req.body
    await this.authService.register(newUsuario)
    res.status(201).json({ ok: true })
  }

}

module.exports = AuthController