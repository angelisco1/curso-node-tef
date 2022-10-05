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

  static async getVendehumos(req, res) {
    const vendehumos = await VendehumosService.getAllVendehumos()

    res.render('vendehumos', {
      listaVendehumos: vendehumos
    })
  }

  static async getVendehumo(req, res) {
    const { vendehumosId } = req.params
    // const vendehumo = vendehumos.find(v => v.id === vendehumosId)
    const vendehumo = await VendehumosService.getVendehumo(vendehumosId)
    res.render('vendehumo', {
      vendehumo
    })
  }

  static async postVendehumos(req, res) {
    const vendehumo = req.body
    console.log(vendehumo)
    await VendehumosService.createVendehumo(vendehumo)
    res.redirect('/vendehumos')
  }

  static patchVotosVendehumo(req, res) {

  }

}

module.exports = VendehumosController