import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogin } from '../actions/auth'
import { useForm } from '../hooks/useForm'

export const Login = () => {

  const dispatch = useDispatch();

  const [ formLoginValues, handleLoginInputChange, reset ] = useForm({
    lEmail: 'johan-avila@outlook.com',
    lPassword: 'Password3'
   });

   const { lEmail, lPassword } = formLoginValues;

   const handleLogin = ( e ) => {
    e.preventDefault();

    dispatch( startLogin( lEmail, lPassword ) );

   }

  return (
    <>
      <div className="form-container">
        <div className="form-title Login-title">
          <h1>INICIO DE SESIÓN</h1>
        </div>

        <form onSubmit={ handleLogin } className="Login-form">
          <input
            type="email"
            placeholder="Email"
            name="lEmail"
            value={ lEmail }
            onChange={ handleLoginInputChange }
          />
          <input
            type="password"
            placeholder="Contraseña"
            name="lPassword"
            value={ lPassword }
            onChange={ handleLoginInputChange }
          />
          <button type="submit" className="form-btn login-btn" >
            Iniciar sesión
          </button>
        </form>
      </div>
    </>
  )
}
