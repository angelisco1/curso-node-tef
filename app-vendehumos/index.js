const config = require('./config')
const express = require('express')
const http = require('http')
const path = require('path')
const AppRouter = require('./src/routes/index.routes')

const app = express()
app.set('view engine', 'ejs')
// app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'src', 'templates'))

app.use(express.json())

app.use(AppRouter)

const server = http.createServer(app)
server.listen(config.PORT, () => {
  console.clear()
  console.log(`---- MODE: ${config.NODE_ENV} ----`)
  console.log('Escuchando en http://localhost:' + config.PORT)
})