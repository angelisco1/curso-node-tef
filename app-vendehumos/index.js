const config = require('./config')
const express = require('express')
const http = require('http')
const path = require('path')
const session = require('express-session')
const AppRouter = require('./src/routes/index.routes')
const { mongoConnect } = require('./src/helpers/db-mongo')
const errorsMiddleware = require('./src/middlewares/errors.middleware')

const app = express()
app.set('view engine', 'ejs')
// app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'src', 'templates'))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(session({
  secret: config.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

app.use(AppRouter)
app.use(errorsMiddleware)

const server = http.createServer(app)

mongoConnect()
  .then(() => {
    server.listen(config.PORT, () => {
      console.clear()
      console.log(`---- MODE: ${config.NODE_ENV} ----`)
      console.log('Escuchando en http://localhost:' + config.PORT)
    })
  })