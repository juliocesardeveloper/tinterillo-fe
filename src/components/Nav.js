import React from 'react'
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../actions/ui';

export default function Nav(){

    const dispatch = useDispatch();

    const handleOpen = (e) => {
        dispatch( uiOpenModal() );
    }

    return(
        <nav className='nav__content'>
            <ul>
                <li><a href='#'>Analitica</a></li>
            </ul>
            <ul className='nav__content-sesion'>
                <li><a className="register-button nav-button" onClick={handleOpen}>Regístrate</a></li>
                <li><a className="login-button nav-button" onClick={handleOpen}>Iniciar sesion</a></li>
            </ul>
        </nav>
    )
}