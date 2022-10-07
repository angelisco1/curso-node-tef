import { useState } from "react"
import { useNavigate } from "react-router-dom"


const NuevoVendehumo = () => {
  const navigate = useNavigate()
  const [nombre, setNombre] = useState('')
  const [categoria, setCategoria] = useState('')

  const crearVendehumo = (e) => {
    e.preventDefault()
    console.log({nombre, categoria})
    const data = {nombre: nombre, categoria: categoria}
    fetch('http://localhost:3000/vendehumos', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      },
    })
      .then(resp => {
        console.log(resp)
        navigate('/vendehumos')
      })
      .catch(console.error)
  }

  return (
    <div>
      <h1>Nuevo vendehumo</h1>
      <form onSubmit={crearVendehumo}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div>
          <label htmlFor="categoria">Categoria:</label>

          <select name="categoria" id="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
            <option value="crypto">Criptomonedas</option>
            <option value="trading">Trading</option>
            <option value="marketing">Marketing</option>
            <option value="desarrollo personal">Desarrollo personal</option>
          </select>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default NuevoVendehumo