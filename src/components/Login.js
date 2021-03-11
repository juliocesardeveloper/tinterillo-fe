import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogin } from '../actions/auth'
import { useForm } from '../hooks/useForm'
import { FaUserAlt } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'


export const Login = () => {

  const dispatch = useDispatch();

  const [ formLoginValues, handleLoginInputChange, reset ] = useForm({
    lEmail: '',
    lPassword: ''
   });

   const { lEmail, lPassword } = formLoginValues;

   const handleLogin = ( e ) => {
    e.preventDefault();

    dispatch( startLogin( lEmail, lPassword ) );

   }

  return (
    <>
      <div className="form-container">
        <div className="form-title-container">
          <h1 className="form-title Login-title">INICIO DE SESIÓN</h1>
        </div>

        <form onSubmit={ handleLogin } className="Login-form">
          <div className="input-container">
            <FaUserAlt className="input-icon" />
            <input
              type="text"
              placeholder="Email"
              name="lEmail"
              value={ lEmail }
              onChange={ handleLoginInputChange }
            />
          </div>
          <div className="input-container">
            <RiLockPasswordFill className="input-icon" />
            <input
              type="password"
              placeholder="Contraseña"
              name="lPassword"
              value={ lPassword }
              onChange={ handleLoginInputChange }
            />
          </div>
          <button className="form-btn login-btn" >
            Iniciar sesión
          </button>
        </form>
      </div>
    </>
  )
}