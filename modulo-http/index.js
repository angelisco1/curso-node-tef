const http = require('http')
const querystring = require('query-string')
const fs = require('fs').promises

const server = http.createServer((req, res) => {
  // console.log('Acabamos de recibir una petición...', { req })

  if (req.method === 'GET' && req.url === '/') {
    getDatosAgenda()
      .then(contactos => {
        console.log({ contactos })
        res.write('<html><head>')
        res.write('<meta charset="utf-8" />')
        res.write('</head><body>')
        res.write('<h1>Agenda 2000</h1>')
        res.write('<a href="/nuevo-contacto">Añadir contacto</a>')
        res.write('<table><thead>')
        res.write('<tr><th>Nombre</th><th>Apellidos</th><th>Teléfono</th><th>Email</th></tr>')
        res.write('</thead><tbody>')

        contactos.forEach(contacto => {
          const { nombre, apellidos, telefono, email } = contacto

          res.write(`<tr><td>${nombre}</td><td>${apellidos}</td><td>${telefono}</td><td>${email}</td></tr>`)
        })

        res.write('</tbody></table></body></html>')

        return res.end()
      })

  } else if (req.method === 'GET' && req.url === '/nuevo-contacto') {
    fs.readFile('public/formulario.html')
      .then(pagina => {
        return res.end(pagina)
      })

  } else if (req.method === 'POST' && req.url === '/nuevo-contacto') {
    const chunks = []
    req.on('data', (chunk) => {
      chunks.push(chunk)
    })

    req.on('end', () => {
      const contenidoForm = chunks.join('').toString()
      const nuevoContacto = querystring.parse(contenidoForm)
      console.log({ nuevoContacto })
      getDatosAgenda()
        .then(contactos => {
          contactos.push(nuevoContacto)
          return fs.writeFile('data/agenda.json', JSON.stringify(contactos, null, 2))
        })
        .then(() => {
          console.log('Contacto guardado!')
          res.setHeader('Location', '/')
          res.statusCode = 302
          return res.end()
        })
    })
  } else if (req.method === 'GET' && req.url === '/datos-externos') {

    const options = {
      hostname: 'jsonplaceholder.typicode.com',
      path: '/todos',
      method: 'GET'
    }

    const request = http.request(options, (response) => {
      const chunks = []
      response.on('data', chunk => {
        chunks.push(chunk)
      })

      response.on('end', () => {
        const result = chunks.join('').toString()
        return res.end(result)
      })
    })

    request.end()

  } else {
    res.statusCode = 404
    res.write('<body><h1>Page not found</h1></body>')
    return res.end()
  }

})

function getDatosAgenda() {
  return fs.readFile('data/agenda.json')
    .then(data => {
      return JSON.parse(data)
    })
}

server.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000')
})