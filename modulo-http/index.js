const http = require('http')

const server = http.createServer((req, res) => {
  console.log('Acabamos de recibir una petición...')
  res.end('Hola mundo!')
})

server.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000')
})