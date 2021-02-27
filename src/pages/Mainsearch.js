import React, {useState, useEffect}from 'react'
import Login from '../components/Login';
import {ModalForm} from '../components/ModalForm';
import Register from '../components/Register';
import Results from "./Results";
import Nav from "./Nav";
import ResultContent from './Result-content'
import datos from '../assets/data.json'
import logo from "../Images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function MainSearch() {
    const [show, setShow] = useState(false)
    const [style, setStyle] = useState('header')
    const [data, setData] = useState('')
    const [change, setChange] = useState(false)
    const [dataApi, setDataApi] = useState(datos)
    const isLogged = false
    const isRegistered = true
    const [showModal, setShowModal] = useState(false);

    useEffect(()=>{
        console.log(dataApi)
    }, [])
    // const [dataApi, setDataApi] = useState(datos)

    //Muestra el primero componente que tiene las tarjetas de resultados de busqueda
    const handleClick = () =>{
        if (data){
            console.log('soy el que pone al primer componente')
            setStyle('header__all')
            setShow(true)
        }else{
            alert('Campo de busqueda vacia')
        }
    }
    //Asigna el valor del input al estado "data"
    const handleChange = (event) =>{
        setData(event.target.value)
    }
    //Muestra el segundo componente con los resultados de la busqueda
    const handleClickResults = ()=>{
        setChange(true)
    }

    const handleRegister = () => {
        if (!isRegistered) return setShowModal(true)
      }
    
      const handleLogin = () => {
        if (!isLogged) return setShowModal(true)
      }
    
      const handleClose = () => {
        setShowModal(false)
      }

    //To read oficial documentation about animations for components in React
    //Leer documentacion sobre (Renderizado condicional)
    if(change){
        return(
            <>
                <div className={style}>
                    <header >
                        <Nav/>
                        <main>
                            <img src={logo} alt='Logo'/>
                            <h1>THE LAST WORD</h1>
                            <div>
                                <section className="section__input">
                                    <label>
                                        <input type="text"/>
                                    </label>
                                    <FontAwesomeIcon 
                                        icon={faSearch} 
                                        className='icon-search'
                                        onClick={handleClick}
                                    />
                                    {/* <button type='button' onClick={handleClick}>Buscar</button> */}
                                </section>
                            </div>
                        </main>
                    </header>
                </div>
                <ResultContent/>
            </>
        )
    }else{
        if (show){
            return(
                <>
                    <div className={style}>
                        <header>
                            <Nav/>
                            <main>
                                <img src={logo} alt='Logo'/>
                                <h1>THE LAST WORD</h1>
                                <div>
                                    <section className="section__input">
                                    <label>
                                        <input type="text"/>
                                    </label>
                                        <FontAwesomeIcon 
                                            icon={faSearch} 
                                            className='icon-search' 
                                            onClick={handleClick}
                                        />
                                        {/* <button type='button' onClick={handleClick}>Buscar</button> */}
                                    </section>
                                </div>
                            </main>
                        </header>
                    </div>
                    <Results click={handleClickResults}/>
                    <Results click={handleClickResults}/>
                    <Results click={handleClickResults}/>
                </>
            )
        }else{
            return(
                <>
                    <div className={style}>
                        <header >
                            <Nav/>
                            <main>
                                <img src={logo} alt='Logo'/>
                                <h1>THE LAST WORD</h1>
                                <div>
                                    <section className="section__input">
                                        <label>
                                            <input type="text" onChange={handleChange}/>
                                        </label>
                                        <FontAwesomeIcon
                                            icon={faSearch}
                                            className='icon-search'
                                            onClick={handleClick}
                                        />
                                    </section>
                                </div>
                            </main>
                        </header>
                    </div>
                    <div>
                        <button className="register-button" onClick={handleRegister}>
                        Registro
                        </button>
                        <button className="login-button" onClick={handleLogin}>
                        Iniciar sesión
                        </button>
                    </div>
                    {showModal &&
                        <ModalForm>
                            {
                            isRegistered
                                ?
                                <Login />
                                :
                                <Register />
                            }
                        </ModalForm>}
                </>
            )
        }
    }
}

export default MainSearch