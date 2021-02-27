import React from 'react'
import '../styles/components/Register.scss'

const Register = () => {
  return (
    <>
      <div className="form-container">
        <div className="form-title register-title">
          <h1>REGISTRO</h1>
        </div>

        <form className="Register-form">
          <input type="text" placeholder="Nombre completo"/>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Contraseña"/>
          <input type="password" placeholder="Confirmar contraseña"/>
          <button className="form-btn register-btn">Registrarme</button>
        </form>

      </div>
    </>
  )
}

export default Register
