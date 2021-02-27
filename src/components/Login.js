import React from 'react'
import '../styles/components/Login.scss'

const Login = () => {
  return (
    <>
      <div className="form-container">
        <div className="form-title Login-title">
          <h1>INICIO DE SESIÓN</h1>
        </div>

        <form className="Login-form">
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Contraseña"/>
          <button className="form-btn login-btn" >Iniciar sesión</button>
        </form>
      </div>
    </>
  )
}

export default Login
