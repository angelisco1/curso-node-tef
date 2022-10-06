const { getDB } = require("../helpers/db-mongo");

class UsuariosMongoRepository {
  async findByEmail(email) {
    const db = getDB()
    const info = await db.collection('usuarios').findOne({ email })
    console.log(info)
    return info
  }

  async create(newUsuario) {
    const db = getDB()
    const info = await db.collection('usuarios').insertOne(newUsuario)
    console.log(info)
    return newUsuario
  }
}

module.exports = UsuariosMongoRepository