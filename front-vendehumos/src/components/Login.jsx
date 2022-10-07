import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/login', {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers:{
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => {
        localStorage.setItem('token', data.jwt)
        navigate('/vendehumos')
      })
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login