const express = require('express')
const http = require('http')
const path = require('path')
const AppRouter = require('./routes/index.routes')

const app = express()

const staticPath = path.join(__dirname, 'public')
app.use(express.static(staticPath))

app.use(express.json())

app.use((req, res, next) => {
  console.log(1)
  // console.log(req.body)
  // req.body = { msg: 'Hola mundo' }
  next()
})

app.use((req, res, next) => {
  console.log(2)
  // console.log(req.body)
  next()
})

app.use(AppRouter)

app.get('/hola-mundo', (req, res) => {
  res.json({ msg: 'Hola mundo' })
})

app.get('/', (req, res) => {
  res.redirect('/pagina-cuadros')
})

app.get('/pagina-cuadros', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'cuadros.html'))
})

app.use((req, res) => {
  // res.statusCode = 404
  // res.status(404).send('<h1>Page not found</h1>')
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

// const server = http.createServer(app) // app -> (req, res) => {}


app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000')
})