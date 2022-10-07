const { MongoClient } = require('mongodb')
const config = require('../../config')

const url = `mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@cluster0.xipob.mongodb.net/?retryWrites=true&w=majority`

let db

const mongoConnect = () => {
  return MongoClient.connect(url)
    .then(client => {
      db = client.db(config.MONGO_DB)
    })
}

const getDB = () => {
  if (db) return db;
  throw new Error('No hay BBDD')
}

module.exports = {
  mongoConnect,
  getDB
}