const db = require('../helpers/db-mysql')

class VendehumosMySqlRepository {
  static async findAll() {
    const info = await db.execute('SELECT * FROM vendehumos')
    return info[0]
  }

  static async findById(vendehumoId) {
    const info = await db.execute('SELECT * FROM vendehumos WHERE id=?', [vendehumoId])
    return info[0][0]
  }

  static async create(vendehumo) {
    const { id, nombre, categoria } = vendehumo
    const info = await db.execute('INSERT INTO vendehumos (id, nombre, categoria) VALUES (?, ?, ?)', [id, nombre, categoria])
    console.log(info)
    return vendehumo
  }
}

module.exports = VendehumosMySqlRepository