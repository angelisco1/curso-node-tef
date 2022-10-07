import { useEffect, useState } from "react"
import _ from 'underscore'
import { socket } from "../index"
import Vendehumo from "./Vendehumo"

const Vendehumos = () => {
  const [vendehumos, setVendehumos] = useState([
    // {id: '1', nombre: 'Vendehumos 1', categoria: 'crypto', numVotos: 1},
    // {id: '2', nombre: 'Vendehumos 2', categoria: 'crypto', numVotos: 0},
  ])

  const ordenarPorVotosAsc = () => {
    const vendehumosOrdenados = _.sortBy(vendehumos, (vh) => vh.numVotos)
    setVendehumos(vendehumosOrdenados)
  }
  const ordenarPorVotosDes = () => {
    const vendehumosOrdenados = _.sortBy(vendehumos, (vh) => (-vh.numVotos))
    setVendehumos(vendehumosOrdenados)
  }


  const updateVotos = (data) => {
    const vendehumosActualizados = vendehumos.map(vh => {
      if (vh.id === data.vendehumoId) {
        return {...vh, numVotos: data.numVotos}
      }
      return {...vh}
    })
    setVendehumos(vendehumosActualizados)
  }

  const addVendehumo = (nuevoVendehumo) => {
    const vendehumosActualizados = [...vendehumos, nuevoVendehumo]
    setVendehumos(vendehumosActualizados)
  }

  useEffect(() => {
    socket.on('votos-actualizados', updateVotos)
    return() => {
      socket.off('votos-actualizados', updateVotos)
    }
  }, [vendehumos])

  useEffect(() => {
    socket.on('vendehumo-added', addVendehumo)
    return() => {
      socket.off('vendehumo-added', addVendehumo)
    }
  }, [vendehumos])

  useEffect(() => {
    fetch('http://localhost:3000/vendehumos')
      .then(resp => resp.json())
      .then(data => {
        setVendehumos(data.vendehumos)
      })
  }, [])


  return (
    <div>
      <h1>Vendehumos</h1>
      <button type="button" onClick={ordenarPorVotosDes}>Ordenar por votos (mayor a menor)</button>
      <button type="button" onClick={ordenarPorVotosAsc}>Ordenar por votos (menor a mayor)</button>
      {vendehumos.map(vh => <Vendehumo key={vh.id} vendehumo={vh} />)}
    </div>
  )
}

export default Vendehumos