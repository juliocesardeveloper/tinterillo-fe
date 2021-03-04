import React from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { startRegister } from '../actions/auth'
import { useForm } from '../hooks/useForm'

export const Register = () => {

  const dispatch = useDispatch();


  const [ formRegisterValues, handleRegisterInputChange, reset ] = useForm({
    rName: 'Johan',
    rEmail: 'johan@outlook.com',
    rPassword1: 'Password3',
    rPassword2: 'Password3'
   });

   const { rName, rEmail, rPassword1, rPassword2 } = formRegisterValues;

   const handleRegister = ( e ) => {
    e.preventDefault();

    if ( rPassword1 !== rPassword2 ) {
      return Swal.fire('Error', 'Las contraseñas deben ser iguales', 'error');
    }

    console.log("?");
    dispatch( startRegister( rEmail, rPassword1, rName ) );

   }

  return (
    <>
      <div className="form-container">
        <div className="form-title register-title">
          <h1>REGISTRO</h1>
        </div>

        <form onSubmit={ handleRegister } className="Register-form">
          <input
            type="text"
            placeholder="Nombre completo"
            name="rName"
            value={ rName }
            onChange={ handleRegisterInputChange }
          />
          <input
            type="email"
            placeholder="Email"
            name="rEmail"
            value={ rEmail }
            onChange={ handleRegisterInputChange }
          />
          <input
            type="password"
            placeholder="Contraseña"
            name="rPassword1"
            value={ rPassword1 }
            onChange={ handleRegisterInputChange }
          />
          <input
            type="password"
            placeholder="Confirmar contraseña"
            name="rPassword2"
            value={ rPassword2 }
            onChange={ handleRegisterInputChange }
          />
          <button type="submit" className="form-btn register-btn">Registrarme</button>
        </form>

      </div>
    </>
  )
}