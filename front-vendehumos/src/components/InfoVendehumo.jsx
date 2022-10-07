import { useState } from "react"
import { useParams } from "react-router-dom"

const InfoVendehumo = () => {
  const params = useParams()
  const [vendehumo, setVendehumo] = useState({})

  return (
    <div>
      <h1>{vendehumo.nombre}</h1>

      <p>Categoria: {vendehumo.categoria}</p>
      <button>{vendehumo.numVotos}</button>
      <a href="/vendehumos">Volver al inicio</a>
    </div>
  )
}

export default InfoVendehumo