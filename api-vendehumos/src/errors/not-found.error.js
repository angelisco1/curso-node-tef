class NotFoundError extends Error {
  constructor(recurso, id) {
    super(`El ${recurso} con id ${id} no se ha encontrado`)
  }
}

module.exports = NotFoundError