import React, {useState} from 'react'

import {Login} from '../components/Login';
import {ModalForm} from '../components/ModalForm';
import {Register} from '../components/Register';

import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../actions/ui';

export default function Nav(){

	// let register = <Register />
	// let login = <Login />

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

    return(
			<>
				<nav className='nav__content'>
					<ul>
						<li><a href='#'>Analitica</a></li>
					</ul>
					<ul className='nav__content-sesion'>
						<li><a className="register-button nav-button" onClick={handleOpenRegister}>Regístrate</a></li>
						<li><a className="login-button nav-button" onClick={handleOpenLogin}>Iniciar sesion</a></li>
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