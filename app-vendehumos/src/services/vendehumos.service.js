const VendehumosMySqlRepository = require("../repositories/vendehumos-mysql.repository")
const uuidV4 = require('uuid').v4

class VendehumosService {

  static async getAllVendehumos() {
    const listaVendehumos = await VendehumosMySqlRepository.findAll()
    return listaVendehumos
  }

  static async getVendehumo(vendehumoId) {
    const vendehumo = await VendehumosMySqlRepository.findById(vendehumoId)
    return vendehumo
  }

  static async createVendehumo(vendehumo) {
    const vendehumoId = uuidV4()
    const newVendehumo = await VendehumosMySqlRepository.create({ ...vendehumo, id: vendehumoId })
    return newVendehumo
  }

}

module.exports = VendehumosService