const InvalidFormatError = require('../errors/invalid-format.error')
const NotFoundError = require('../errors/not-found.error')
const emitter = require('../helpers/event-emitter')
const uuidV4 = require('uuid').v4

// const VendehumosMySqlRepository = require("../repositories/vendehumos-mysql.repository")

class VendehumosService {
  constructor({ vendehumosRepository }) {
    this.vendehumosRepository = vendehumosRepository
  }

  async getAllVendehumos() {
    // const listaVendehumos = await VendehumosMySqlRepository.findAll()
    const listaVendehumos = await this.vendehumosRepository.findAll()
    return listaVendehumos
  }

  async getVendehumo(vendehumoId) {
    const vendehumo = await this.vendehumosRepository.findById(vendehumoId)
    if (!vendehumo) {
      throw new NotFoundError('vendehumos', vendehumoId)
    }
    return vendehumo
  }

  async createVendehumo(vendehumo) {
    const vendehumoId = uuidV4()
    const vendehumoKeys = Object.keys(vendehumo)
    if (!(vendehumoKeys.length === 2 && vendehumoKeys.includes('nombre') && vendehumoKeys.includes('categoria'))) {
      throw new InvalidFormatError(`Para crear el vendehumo necesitas un objeto como {nombre: 'aaa', categoria: 'bbb'}`)
    }
    const newVendehumo = await this.vendehumosRepository.create({ ...vendehumo, id: vendehumoId })
    emitter.emit('vendehumo-creado', newVendehumo)
    return newVendehumo
  }

  async updateVotosVendehumos(vendehumoId, numVotos) {
    await this.vendehumosRepository.updateVotos(vendehumoId, numVotos)
    emitter.emit('actualiza-votos', { vendehumoId, numVotos })
    return true
  }

}

module.exports = VendehumosService