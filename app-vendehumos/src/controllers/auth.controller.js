class AuthController {
  constructor({ authService }) {
    this.authService = authService
  }

  async getLogin(req, res) {
    res.render('login')
  }

  async getRegister(req, res) {
    res.render('register')
  }

  async postLogin(req, res, next) {
    const { email, password } = req.body
    try {
      const usuario = await this.authService.login(email, password)
      res.session.usuario = usuario
      res.redirect('/vendehumos')
    } catch (err) {
      console.log(err)
      next(err)
    }

  }

  async postRegister(req, res) {
    const newUsuario = req.body
    await this.authService.register(newUsuario)
    res.render('login')
  }
}

module.exports = AuthController