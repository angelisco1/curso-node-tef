import { Link } from "react-router-dom"

const Vendehumo = ({vendehumo}) => {

  return (
    <div>
      <p>{vendehumo.nombre}</p>
      <p>Categoria: {vendehumo.categoria}</p>
      <button type="button">{vendehumo.numVotos}</button>
      <Link to={'/vendehumos/' + vendehumo.id}>+ info</Link>
    </div>
  )
}

export default Vendehumo