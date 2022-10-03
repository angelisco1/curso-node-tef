// common js
const fs = require('fs')
const fsPromises = require('fs').promises
const Logger = require('./logger')

// const texto1 = fs.readFileSync('files/1.txt')
// console.log(texto1.toString())

// const texto2 = fs.readFileSync('files/2.txt')
// console.log(texto2.toString())

// fs.readFile('files/1.txt', (err, texto1) => {
//   console.log(texto1.toString())

//   fs.readFile('files/2.txt', (err, texto2) => {
//     console.log(texto2.toString())

//     fs.readFile('files/3.txt', (err, texto3) => {
//       console.log(texto3.toString())
//     })
//   })
// })

const filesNames = ['1', '2', '3']
filesNames.forEach(fileName => {
  fs.writeFile(`files/${fileName}.txt`, fileName, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`Se ha creado el archivo ${fileName}.txt`)
    setTimeout(() => {
      fs.unlink(`files/${fileName}.txt`, (err) => {
        if (err) {
          console.log(err)
        }
        console.log('Archivo eliminado!')
      })
    }, 5000)
  })
})




// const read1 = fsPromises.readFile('files/1.txt')
// const read2 = fsPromises.readFile('files/2.txt')
// const read3 = fsPromises.readFile('files/3.txt')

// read1
//   .then(texto1 => {
//     console.log(texto1.toString())
//     // read2
//     //   .then(texto2 => {
//     //     console.log(texto2.toString())
//     //   })
//     //   .catch(err => {
//     //     console.log(err)
//     //   })
//     return read2
//   })
//   .then(texto2 => {
//     console.log(texto2.toString())
//     return read3
//   })
//   .then(texto3 => {
//     console.log(texto3.toString())
//   })
//   .catch(err => {
//     console.log(err)
//   })


// A partir del datos.json crear un archivo vistas.json con las series vistas y otro archivo no-vistas.json con las no vistas

fsPromises.readFile('files/datos.json')
  .then(datos => {
    console.log({ datos: datos.toString() })
    const datosJSON = JSON.parse(datos.toString())

    // const seriesVistas = datosJSON.filter(serie => serie.vista)
    // const seriesNoVistas = datosJSON.filter(serie => !serie.vista)
    // console.log({ seriesVistas, seriesNoVistas })

    const seriesVistas = []
    const seriesNoVistas = []
    datosJSON.forEach((serie) => {
      if (serie.vista) {
        seriesVistas.push(serie)
      } else {
        seriesNoVistas.push(serie)
      }
    })
    console.log({ seriesVistas, seriesNoVistas })

    return Promise.all([
      fsPromises.writeFile('files/vistas.json', JSON.stringify(seriesVistas, null, 2)),
      fsPromises.writeFile('files/no-vistas.json', JSON.stringify(seriesNoVistas, null, 2)),
    ])
  })
  .then(() => {
    console.log('Archivos creados con éxito.')
  })



setInterval(() => {
  const randomNum = Math.floor(Math.random() * 3)
  switch (randomNum) {
    case 0:
      Logger.info('Mensaje de información');
      break;
    case 1:
      Logger.warning('Cuidadoooo!');
      break;
    case 2:
      Logger.error('Error! ya la has liado');
      break;
  }
}, 2000)