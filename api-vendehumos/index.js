const config = require('./config')
const express = require('express')
const cors = require('cors')
const http = require('http')
const SocketIO = require('socket.io')
const AppRouter = require('./src/routes/index.routes')
const { mongoConnect } = require('./src/helpers/db-mongo')
const errorsMiddleware = require('./src/middlewares/errors.middleware')
const emitter = require('./src/helpers/event-emitter')

const app = express()

app.use(cors())
app.use(express.json())

app.use(AppRouter)
app.use(errorsMiddleware)

const server = http.createServer(app)
const io = SocketIO(server, {
  cors: {
    origin: '*'
  }
})

io.on('connection', socket => {
  console.log('Alguien se acaba de conectar a la app', socket.id)

  emitter.on('actualiza-votos', (data) => {
    socket.emit('votos-actualizados', data)
  })
  emitter.on('vendehumo-creado', (data) => {
    socket.emit('vendehumo-added', data)
  })

})

mongoConnect()
  .then(() => {
    server.listen(config.PORT, () => {
      console.clear()
      console.log(`---- MODE: ${config.NODE_ENV} ----`)
      console.log('Escuchando en http://localhost:' + config.PORT)
    })
  })