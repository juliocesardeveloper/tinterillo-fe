import React, {useState, useEffect}from 'react'
import { useHistory } from 'react-router-dom'
// import Login from '../components/Login';
// import Modal from '../components/Modal';
// import Register from '../components/Register';
import Results from "../components/results";
import Nav from "../components/Nav";
import ResultContent from '../components/Result-content'
// import datos from '../assets/data.json'
import logo from "../Images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

export default function MainSearch() {
    const [show, setShow] = useState(false)
    const [style, setStyle] = useState('header')
    const [data, setData] = useState('')
    const [change, setChange] = useState(false)
    const history = useHistory()
    // const [dataApi, setDataApi] = useState(datos)

    const isRegistered = false
    // useEffect(()=>{
    //     console.log(dataApi)
    // }, [])

    // const [dataApi, setDataApi] = useState(datos)

    //Muestra el primero componente que tiene las tarjetas de resultados de busqueda
    const handleClick = (e) =>{
        e.preventDefault();
        if (data){
            setStyle('header__all')
            setShow(true)
            history.push('/search')
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


    
    //metodos para el login y registro de usuario
    const handleRegister = () => {
        if (!isRegistered) return setShowModal(true)
      }
    
      const handleLogin = () => {
        if (!isLogged) return setShowModal(true)
      }
    
      const handleClose = () => {
        setShowModal(false)
      }
      //Fin metodos para el login y registro de usuarios

    //To read oficial documentation about animations for components in React
    return(
        <>
            <form className={style} onSubmit={handleClick}>
                <header>
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
                                    type='submit'
                                />
                            </section>
                        </div>
                    </main>
                </header>
            </form>
            {
                change ? <ResultContent/> 
                : show && 
                    <>
                        <Results click={handleClickResults}/>
                        <Results click={handleClickResults}/>
                        <Results click={handleClickResults}/>
                    </>
            }
            <ModalForm>
                {
                isRegistered
                    ?
                    <Login />
                    :
                    <Register />
                }
            </ModalForm>

        </>
    )
}
