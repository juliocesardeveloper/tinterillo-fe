import React, {useState} from 'react'

import logo from "../Images/logo-tinterillo-light-color.png"

import { Link } from 'react-router-dom'

import {Login} from '../components/Login';
import {ModalForm} from '../components/ModalForm';
import {Register} from '../components/Register';

import { useDispatch, useSelector } from 'react-redux';
import { uiIsLoggedOut, uiOpenModal } from '../actions/ui';
import { startLogout } from '../actions/auth';

export default function Nav(){

	

	// let register = <Register />
	// let login = <Login />
    const [register, setRegister] = useState(false)
    const [login, setLogin] = useState(false)

		const { isLogged } = useSelector(state => state.ui)
		const { displayName } = useSelector( state => state.auth )

    const dispatch = useDispatch();

    const handleOpenRegister = (e) => {
        dispatch( uiOpenModal() );
				setRegister(true)
				setLogin(false)
    }

    const handleOpenLogin = (e) => {
        dispatch( uiOpenModal() );
				setLogin(true)
				setRegister(false)
    }

		const handleOpenProfile = (e) => {
			
		}

		const handleLogout = () => {
			dispatch( startLogout() )
			dispatch( uiIsLoggedOut() )
		}

    return(
			<>
				<nav className='nav__content'>
					<div className="logo-container">
						<Link to="/"><img className="tinterillo-logo" src={ logo } alt=""/></Link>
					</div>
					<ul className='nav__content-sesion'>
						{
							isLogged
							?
								<>
									<li className="display-name">Hola {displayName}</li>
									<li><Link to="/perfil" className="profile-button nav-button" onClick={handleOpenProfile}>Perfil</Link></li>
									<li><Link to="/" className="profile-button nav-button" onClick={handleLogout}>Cerrar Sesión</Link></li>
								</>
							:
								<>
									<li><a className="register-button nav-button" onClick={handleOpenRegister}>Regístrate</a></li>
									<li><a className="login-button nav-button" onClick={handleOpenLogin}>Iniciar sesion</a></li>
								</>


						}
					</ul>
				</nav>
				<ModalForm>

					{
						register ? <Register /> : login ? <Login /> : ""
					}


					{/* {!register
					?
					<Register />
					: 
					<Login />} */}

				</ModalForm>
			</>
    )
}