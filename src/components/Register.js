import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startRegister, startRegisterWithEmailPasswordName } from '../actions/auth'
import { useForm } from '../hooks/useForm'
import validator from 'validator'
import { uiCloseModal, uiRemoveError, uiSetError } from '../actions/ui'
import { BiErrorAlt } from 'react-icons/bi'

export const Register = () => {

  const dispatch = useDispatch();
  const { msgError,  } = useSelector(state => state.ui);

  const [ formRegisterValues, handleRegisterInputChange ] = useForm({
    rName: 'Johan',
    rEmail: 'johan@outlook.com',
    rPassword1: 'Password3',
    rPassword2: 'Password3'
   });

   const { rName, rEmail, rPassword1, rPassword2 } = formRegisterValues;

   const handleRegister = ( e ) => {
    e.preventDefault();

    if ( isFormValid() ) {
      dispatch( startRegisterWithEmailPasswordName( rEmail, rPassword1, rName ) )
      dispatch( uiCloseModal() )
    }

   }

   const isFormValid = () => {
     if ( rName.trim().length === 0 ) {
       dispatch( uiSetError('Escribe un nombre') );
       return false;
     } else if ( !validator.isEmail( rEmail ) ) {
       dispatch( uiSetError('El email no es válido') );
       return false;
     } else if ( rPassword1 !== rPassword2 || rPassword1 < 5 ) {
       dispatch( uiSetError('El password debe tener al menos 6 caracteres y coincidir con el password de confirmación') );
       return false
     }
     dispatch( uiRemoveError() );
     return true;
   }

  return (
    <>
      <div className="form-container">
        <div className="form-title register-title">
          <h1>REGISTRO</h1>
        </div>

        <form onSubmit={ handleRegister } className="Register-form">

          {
            msgError &&
            (
              <div className="msg-alert">
                <BiErrorAlt />
                <p className="msg-alert__p">{ msgError }</p>
              </div>
            )
          }

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