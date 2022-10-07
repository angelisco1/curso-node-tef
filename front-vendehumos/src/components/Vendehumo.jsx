import { Link } from "react-router-dom"

const Vendehumo = ({vendehumo}) => {
  console.log(vendehumo.id)
  const isLoggedIn = localStorage.getItem('token')

  const updateVotos = (e) => {
    fetch('http://localhost:3000/vendehumos/' + vendehumo.id, {
      method: 'PATCH',
      body: JSON.stringify({numVotos: Number(vendehumo.numVotos) + 1}),
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      }
    })
  }

  return (
    <div>
      <p>{vendehumo.nombre}</p>
      <p>Categoria: {vendehumo.categoria}</p>
      <button type="button" onClick={updateVotos} disabled={!isLoggedIn}>{vendehumo.numVotos}</button>
      <Link to={'/vendehumos/' + vendehumo.id}>+ info</Link>
    </div>
  )
}

export default Vendehumo