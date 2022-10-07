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
    const vendehumos = await this.vendehumosService.getAllVendehumos()

    res.json({ vendehumos })
  }

  async getVendehumo(req, res, next) {
    const { vendehumosId } = req.params
    try {
      const vendehumo = await this.vendehumosService.getVendehumo(vendehumosId)
      res.json({ vendehumo })
    } catch (err) {
      next(err)
    }
  }

  async postVendehumos(req, res, next) {
    const vendehumo = req.body
    try {
      await this.vendehumosService.createVendehumo(vendehumo)
      res.status(201).json({ ok: true })
    } catch (err) {
      next(err)
    }
  }

  async patchVotosVendehumo(req, res) {
    const { numVotos } = req.body
    const { vendehumosId } = req.params
    await this.vendehumosService.updateVotosVendehumos(vendehumosId, numVotos)
    res.json({ ok: true })
  }

}

module.exports = VendehumosController