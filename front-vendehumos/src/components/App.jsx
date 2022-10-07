// import React from 'react';

import { Link, Navigate, Route, Routes } from "react-router-dom"
import InfoVendehumo from "./InfoVendehumo"
import Login from "./Login"
import NuevoVendehumo from "./NuevoVendehumo"
import Register from "./Register"
import Vendehumos from "./Vendehumos"

const App = () => {
  return (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/vendehumos">Inicio</Link>
      <Link to="/nuevo-vendehumo">Nuevo vendehumo</Link>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/vendehumos" element={<Vendehumos />} />
        <Route path="/nuevo-vendehumo" element={<NuevoVendehumo />} />
        <Route path="/vendehumos/:vendehumoId" element={<InfoVendehumo />} />
        <Route path="/" element={<Navigate to="/vendehumos" />} />
      </Routes>
    </div>
  )
}

export default App
