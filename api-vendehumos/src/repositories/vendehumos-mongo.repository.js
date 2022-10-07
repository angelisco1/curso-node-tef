const { getDB } = require("../helpers/db-mongo");
const IVendehumosRepository = require("./vendehumos.repository");


class VendehumosMongoRepository extends IVendehumosRepository {

  async findById(vendehumoId) {
    const db = getDB()
    const info = await db.collection('vendehumos').findOne({ _id: vendehumoId })
    console.log({ info })
    if (!info) {
      return null
    }
    const { _id, ...vendehumo } = info
    vendehumo.id = _id
    return vendehumo
  }

  async findAll() {
    const db = getDB()
    const info = await db.collection('vendehumos').find({}).toArray()
    return info.map(vh => {
      const { _id, ...vendehumo } = vh
      vendehumo.id = _id
      return vendehumo
    })
  }

  async create(vendehumo) {
    vendehumo.numVotos = 0
    const { id, nombre, categoria, numVotos } = vendehumo
    const db = getDB()
    const info = await db.collection('vendehumos').insertOne({ _id: id, categoria, nombre, numVotos })
    return { ...vendehumo }
  }

  async updateVotos(vendehumoId, numVotos) {
    const db = getDB()
    const info = await db.collection('vendehumos').updateOne({ _id: vendehumoId }, { $set: { numVotos } })
    console.log(info)
    return true
  }

}

module.exports = VendehumosMongoRepository