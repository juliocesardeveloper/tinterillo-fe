import React from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { startRegister } from '../actions/auth'
import { useForm } from '../hooks/useForm'

import { FaUserAlt } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'
import { MdEmail } from 'react-icons/md'

export const Register = () => {

  const dispatch = useDispatch();


  const [ formRegisterValues, handleRegisterInputChange ] = useForm({
    rName: '',
    rEmail: '',
    rPassword1: '',
    rPassword2: ''
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
        <div className="form-title-container">
          <h1 className="form-title register-title">REGISTRO</h1>
        </div>

        <form onSubmit={ handleRegister } className="Register-form">
          <div className="input-container">
            <FaUserAlt className="input-icon" />
            <input
              type="text"
              placeholder="Nombre completo"
              name="rName"
              value={ rName }
              onChange={ handleRegisterInputChange }
            />
          </div>
          <div className="input-container">
            <MdEmail className="input-icon" />
            <input
              type="email"
              placeholder="Email"
              name="rEmail"
              value={ rEmail }
              onChange={ handleRegisterInputChange }
            />
          </div>
          <div className="input-container">
            <RiLockPasswordFill className="input-icon" />
            <input
              type="password"
              placeholder="Contraseña"
              name="rPassword1"
              value={ rPassword1 }
              onChange={ handleRegisterInputChange }
            />
          </div>
          <div className="input-container">
            <RiLockPasswordFill className="input-icon" />
            <input
              type="password"
              placeholder="Confirmar contraseña"
              name="rPassword2"
              value={ rPassword2 }
              onChange={ handleRegisterInputChange }
            />
          </div>
          <button type="submit" className="form-btn register-btn">Registrarme</button>
        </form>

      </div>
    </>
  )
}