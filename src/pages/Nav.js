import React from 'react'

function Nav(){
    return(
        <nav className='nav__content'>
            <ul>
                <li><a href='#'>Nosotros</a></li>
            </ul>
            <ul className='nav__content-sesion'>
                <li><a href='#'>Regístrate</a></li>
                <li><a href='#'>Iniciar sesion</a></li>
            </ul>
        </nav>
    )
}

export default Nav