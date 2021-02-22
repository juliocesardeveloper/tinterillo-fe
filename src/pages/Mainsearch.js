// import React from 'react'
import "../styles/pages/Main-search.scss";

function MainSearch() {
    return(
        <header>
            <nav>
                <ul>
                    <li>Nosotros</li>
                </ul>
                <ul>
                    <li>Registrate</li>
                    <li>Iniciar sesion</li>
                </ul>
            </nav>
            <main>
                <img src="https://lh3.googleusercontent.com/ogw/ADGmqu_ksm6Ql15mCzcSRiahXsgeljHqXoPqOfDWWnlo=s32-c-mo" alt="imagen de perfil"  title="Cuenta de Google: jairo ramirez (trolljairo@gmail.com)"/>
                <h1>Titulo pagina</h1>
                <div>
                    <section className="section__input">
                        <input className="main-input-text" type="text"/>
                        <a className="input-micro-icon"></a>
                    </section>
                    <button>Icono</button>
                </div>
            </main>
        </header>
    )
}

export default MainSearch