import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startRegister, startRegisterWithEmailPasswordName } from '../actions/auth'
import { useForm } from '../hooks/useForm'
import validator from 'validator'
import { uiCloseModal, uiRemoveError, uiSetError } from '../actions/ui'
import { BiErrorAlt } from 'react-icons/bi'
import { FaUserAlt } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'
import { MdEmail } from 'react-icons/md'


const departmentOptions = [
  "Amazonas",
  "Antioquia",
  "Arauca",
  "Atlantico",
  "Bolivar",
  "Boyaca",
  "Caldas",
  "Caqueta",
  "Casanare",
  "Cauca",
  "Cesar",
  "Choco",
  "Cordoba",
  "Cundinamarca",
  "Guainia",
  "Guaviare",
  "Huila",
  "La Guajira",
  "Magdalena",
  "Meta",
  "Nariño",
  "Putumayo",
  "Quindio",
  "Risaralda",
  "Santander",
  "Sucre",
  "Tolima",
  "Vaupes",
  "Vichada",
  "San Andres y Providencia",
  "Norte de Santander",
  "Valle del Cauca"
]

const genderOptions = [
  "Femenino",
  "Masculino",
  "Otro",
  "Prefiero no decir"
]


export const Register = () => {

  const dispatch = useDispatch();
  const { msgError,  } = useSelector(state => state.ui);
  

  const [ formRegisterValues, handleRegisterInputChange ] = useForm({
    rName: '',
    rLastName: '',
    rEmail: '',
    rPassword1: '',
    rPassword2: '',
    rDepartment: '',
    rGender: '',
    rBirthday: '',
    rJob: ''

   });

   const { rName, rLastName, rEmail, rPassword1, rPassword2, rDepartment, rGender, rBirthday, rJob } = formRegisterValues;

   const handleRegister = ( e ) => {
    e.preventDefault();

    if ( isFormValid() ) {
      dispatch( startRegisterWithEmailPasswordName( rEmail, rPassword1, rName ) )
      dispatch( startRegister( rName, rLastName, rEmail, rPassword1, rPassword2, rDepartment, rGender, rBirthday, rJob ) )
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
     } else if ( rDepartment === "" ) {
      dispatch( uiSetError('Por favor escoje un departamento de residencia') );
      return false
    } else if ( rGender === "" ) {
      dispatch( uiSetError('Por favor escoje una de las opciones en Género') );
      return false
    } else if ( rBirthday === "" ) {
      dispatch( uiSetError('Por favor selecciona tu fecha de nacimiento') );
      return false
    } else if ( rJob === "" ) {
      dispatch( uiSetError('Por favor escribe tu profesión o a qué te dedicas') );
      return false
    }
     dispatch( uiRemoveError() );
     return true;
   }

  return (
    <>
      <div className="form-container">
        <div className="form-title-container">
          <h1 className="form-title register-title">REGISTRO</h1>
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
          <div className="input-container">
            <FaUserAlt className="input-icon" />
            <input
              type="text"
              placeholder="Nombre"
              name="rName"
              value={ rName }
              onChange={ handleRegisterInputChange }
            />
          </div>
          <div className="input-container">
            <FaUserAlt className="input-icon" />
            <input
              type="text"
              placeholder="Apellido"
              name="rLastName"
              value={ rLastName }
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
          <div className="input-container">
            <select className="select" id="departments" name="rDepartment" value={rDepartment} onChange={handleRegisterInputChange}>
              <option value="">Departamento</option>
              {
                departmentOptions.map((item, index) => (
                  <option className="option" key={ index }>{ item }</option>
                ))
              }
            </select>
          </div>
          <div className="input-container">

            <select className="select" id="gender" name="rGender" value={rGender} onChange={handleRegisterInputChange}>
              <option value="">Género</option>
              {
                genderOptions.map((item, index) => (
                  <option className="option" key={ index }>{ item }</option>
                ))
              }
            </select>
          </div>
          <div className="input-container">
            <input
              type="date"
              placeholder="Fecha de nacimiento"
              name="rBirthday"
              value={ rBirthday }
              onChange={ handleRegisterInputChange }
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Profesión"
              name="rJob"
              value={ rJob }
              onChange={ handleRegisterInputChange }
            />
          </div>

          <button type="submit" className="form-btn register-btn">Registrarme</button>
        </form>

      </div>
    </>
  )
}