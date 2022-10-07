import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const register = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/register', {
      method: 'POST',
      body: JSON.stringify({username, email, password}),
      headers:{
        'Content-Type': 'application/json'
      }
    })
      .then(resp => {
        navigate('/login')
      })
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={register}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register