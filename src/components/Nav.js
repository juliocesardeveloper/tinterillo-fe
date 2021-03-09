import React, {useState} from 'react'

import logo from "../Images/logo-tinterillo-light-color.png"

import { Link } from 'react-router-dom'

import {Login} from '../components/Login';
import {ModalForm} from '../components/ModalForm';
import {Register} from '../components/Register';

import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../actions/ui';

export default function Nav(){

	// let register = <Register />
	// let login = <Login />
		const logged = true
    const [register, setRegister] = useState(false)
    const [login, setLogin] = useState(false)

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

    return(
			<>
				<nav className='nav__content'>
					<div className="logo-container">
						<Link to="/"><img className="tinterillo-logo" src={ logo } alt=""/></Link>
					</div>
					<ul className='nav__content-sesion'>
						{
							logged
							?
								<li><Link to="/perfil" className="profile-button nav-button" onClick={handleOpenProfile}>Hola usuario</Link></li>
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