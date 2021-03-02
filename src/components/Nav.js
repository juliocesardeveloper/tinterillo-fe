import React from 'react'
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../actions/ui';


function Nav(){

    const dispatch = useDispatch();

    const handleOpen = (e) => {
        dispatch( uiOpenModal() );
    }

    return(
        <nav className='nav__content'>
            <ul>
                <li><a href='#'>Nosotros</a></li>
            </ul>
            <ul className='nav__content-sesion'>
                <li><button className="register-button nav-button" onClick={handleOpen}>Regístrate</button></li>
                <li><button className="login-button nav-button" onClick={handleOpen}>Iniciar sesion</button></li>
            </ul>
        </nav>
    )
}

export default Nav