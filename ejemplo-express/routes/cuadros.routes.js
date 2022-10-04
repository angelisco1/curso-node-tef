const express = require('express')
const CuadrosRouter = express.Router()

const cuadros = [{ id: 1, titulo: 'Cuadro 1', imagen: 'url1', autor: 'Autor 1' }, { id: 2, titulo: 'Cuadro 2', imagen: 'url2', autor: 'Autor 2' }]

CuadrosRouter.get('/cuadros', (req, res, next) => {
  const { autor } = req.query
  console.log(autor)
  let resultado = cuadros
  if (autor) {
    resultado = cuadros.filter(cuadro => cuadro.autor === autor)
  }

  res.json(resultado)
})

CuadrosRouter.get('/cuadros/:cuadroId', (req, res, next) => {
  const { cuadroId } = req.params
  const cuadro = cuadros.find(cuadro => cuadro.id === Number(cuadroId))
  if (!cuadro) {
    return res.status(404).json({ msg: `El cuadro con id: ${cuadroId} no existe` })
  }

  res.json(cuadro)
})

module.exports = CuadrosRouter