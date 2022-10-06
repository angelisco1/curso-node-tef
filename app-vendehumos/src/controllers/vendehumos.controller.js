const VendehumosService = require('../services/vendehumos.service')


// const vendehumos = [
//   {
//     id: uuidV4(),
//     nombre: 'Vendehumos 1',
//     categoria: 'Crypto',
//     numVotos: 2,
//   },
//   {
//     id: uuidV4(),
//     nombre: 'Vendehumos 2',
//     categoria: 'Trading',
//     numVotos: 1,
//   },
// ]


class VendehumosController {
  constructor({ vendehumosService }) {
    this.vendehumosService = vendehumosService
  }

  async getVendehumos(req, res) {
    // const vendehumos = await VendehumosService.getAllVendehumos()
    const vendehumos = await this.vendehumosService.getAllVendehumos()

    res.render('vendehumos', {
      listaVendehumos: vendehumos
    })
  }

  async getVendehumo(req, res, next) {
    const { vendehumosId } = req.params
    try {
      // const vendehumo = vendehumos.find(v => v.id === vendehumosId)
      const vendehumo = await this.vendehumosService.getVendehumo(vendehumosId)
      res.render('vendehumo', {
        vendehumo
      })
    } catch (err) {
      next(err)
    }
  }

  getFormularioVendehumo(req, res) {
    res.render('formulario-vendehumo')
  }

  async postVendehumos(req, res, next) {
    const vendehumo = req.body
    try {
      console.log(vendehumo)
      await this.vendehumosService.createVendehumo(vendehumo)
      res.redirect('/vendehumos')
    } catch (err) {
      next(err)
    }
  }

  async patchVotosVendehumo(req, res) {
    const { numVotos } = req.body
    const { vendehumosId } = req.params
    await this.vendehumosService.updateVotosVendehumos(vendehumosId, numVotos)
    res.redirect('/vendehumos')
  }

}

module.exports = VendehumosController