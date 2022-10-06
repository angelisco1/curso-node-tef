const db = require('../helpers/db-mysql')
const IVendehumosRepository = require('./vendehumos.repository')
class VendehumosMySqlRepository extends IVendehumosRepository {
  async findAll() {
    const info = await db.execute('SELECT * FROM vendehumos')
    return info[0]
  }

  async findById(vendehumoId) {
    const info = await db.execute('SELECT * FROM vendehumos WHERE id=?', [vendehumoId])
    return info[0][0]
  }

  async create(vendehumo) {
    const { id, nombre, categoria } = vendehumo
    const info = await db.execute('INSERT INTO vendehumos (id, nombre, categoria) VALUES (?, ?, ?)', [id, nombre, categoria])
    console.log(info)
    return vendehumo
  }

  async updateVotos(vendehumoId, numVotos) {
    const info = await db.execute('UPDATE vendehumos SET numVotos=? WHERE id=?', [numVotos, vendehumoId])
    console.log(info)
    return true
  }
}

module.exports = VendehumosMySqlRepository