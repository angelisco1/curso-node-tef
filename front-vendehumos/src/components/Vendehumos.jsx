import { useState } from "react"
import Vendehumo from "./Vendehumo"

const Vendehumos = () => {
  const [vendehumos, setVendehumos] = useState([
    {id: '1', nombre: 'Vendehumos 1', categoria: 'crypto', numVotos: 1},
    {id: '2', nombre: 'Vendehumos 2', categoria: 'crypto', numVotos: 0},
  ])

  return (
    <div>
      <h1>Vendehumos</h1>
      {vendehumos.map(vh => <Vendehumo key={vh.id} vendehumo={vh} />)}
    </div>
  )
}

export default Vendehumos