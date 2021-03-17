import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startGoogleLogin, startLoginEmailPassword } from '../actions/auth'
import { useForm } from '../hooks/useForm'
import { FcGoogle } from 'react-icons/fc'
import { uiCloseModal } from '../actions/ui'

export const Login = () => {

  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.ui)

  const [ formLoginValues, handleLoginInputChange ] = useForm({
    lEmail: 'johan@outlook.com',
    lPassword: 'Password3'
   });

   const { lEmail, lPassword } = formLoginValues;

   const handleLogin = ( e ) => {
    e.preventDefault();

    dispatch( startLoginEmailPassword( lEmail, lPassword ) );
    dispatch( uiCloseModal() )
   }

   const handleGoogleLogin = () => {
     dispatch( startGoogleLogin() );
   }

  return (
    <>
      <div className="form-container">
        <div className="form-title Login-title">
          <h1>INICIO DE SESIÓN</h1>
        </div>

        <form onSubmit={ handleLogin } className="Login-form">
          <input
            type="text"
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
          <button
            type="submit"
            className="form-btn login-btn"
            disabled={ loading }
          >
            Iniciar sesión
          </button>
          <button className="form-btn google-btn" onClick={ handleGoogleLogin }>
            <FcGoogle className="google-icon" />
            <p>Inicia sesión con Google</p>
          </button>
        </form>
      </div>
    </>
  )
}