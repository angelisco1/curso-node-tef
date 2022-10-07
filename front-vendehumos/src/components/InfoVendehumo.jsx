import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const InfoVendehumo = () => {
  const params = useParams()
  const [vendehumo, setVendehumo] = useState({})
  console.log({params})
  useEffect(() => {
    fetch('http://localhost:3000/vendehumos/' + params.vendehumoId)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setVendehumo(data.vendehumo)
      })
  }, [])

  return (
    <div>
      <h1>{vendehumo.nombre}</h1>

      <p>Categoria: {vendehumo.categoria}</p>
      <button>{vendehumo.numVotos}</button>
      <Link to="/vendehumos">Volver al inicio</Link>
    </div>
  )
}

export default InfoVendehumo