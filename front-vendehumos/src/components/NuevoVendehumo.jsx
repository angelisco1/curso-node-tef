import { useState } from "react"

const NuevoVendehumo = () => {
  const [nombre, setNombre] = useState('')
  const [categoria, setCategoria] = useState('')

  const crearVendehumo = (e) => {
    e.preventDefault()
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
          <input type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default NuevoVendehumo