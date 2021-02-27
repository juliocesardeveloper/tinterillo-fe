import React, {useState, useEffect}from 'react'
import Login from '../components/Login';
import Modal from '../components/Modal';
import Register from '../components/Register';
import Results from "./Results";
import Nav from "./Nav";
import ResultContent from './Result-content'
import datos from '../assets/data.json'

function MainSearch() {
    const [show, setShow] = useState(false)
    const [data, setData] = useState('')
    const [change, setChange] = useState(false)
    const [dataApi, setDataApi] = useState(datos)
    const isLogged = false
    const isRegistered = true
    const [showModal, setShowModal] = useState(false);

    useEffect(()=>{
        console.log(dataApi)
    }, [])

    const handleClick = () =>{
        setShow(true)
    }

    const handleChange = (event) =>{
        setData(event.target.value)
    }

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

    // console.log(`Este es el nombre: ${dataApi.Title}`)
    if(change){
        return(
            <div>
                <header>
                    <Nav/>
                    <main>
                        <img src="../Images/logo.svg" alt='Logo'/>
                        <h1>TINTERILLO</h1>
                        <div>
                            <section className="section__input">
                                <label>
                                    <input type="text"/>
                                </label>
                                {/* <img src={search} className='icon-search'></img> */}
                                <button type='button'>Buscar</button>
                            </section>
                        </div>
                    </main>
                </header>
                <ResultContent/>
            </div>
        )
    }else{
        if (show) {
            if(data.length > 0){
                return(
                    <div>
                        <header>
                            <Nav/>
                            <main>
                                <img src='../Images/logo.svg' alt='Logo'/>
                                <h1>THE LAST WORD</h1>
                                <div>
                                    <section className="section__input">
                                    <label>
                                        <input type="text"/>
                                    </label>
                                        {/* <img src={search} className='icon-search'></img> */}
                                        <button type='button'>Buscar</button>
                                    </section>
                                </div>
                            </main>
                        </header>
                        <Results click={handleClickResults}/>
                        <Results click={handleClickResults}/>
                        <Results click={handleClickResults}/>
                    </div>
                )
            }else{
                alert('Campo de busqueda vacia')
                return(
                    <header>
                        <Nav/>
                        <main>
                            <img src='../Images/logo.svg' alt='Logo'/>
                            <h1>THE LAST WORD</h1>
                            <div>
                                <section className="section__input">
                                <label>
                                    <input type="text" onChange={handleChange}/>
                                </label>
                                    {/* <img src={search} className='icon-search'></img> */}
                                    <button type='button' onClick={handleClick}>Buscar</button>
                                </section>
                            </div>
                        </main>
                    </header>
                )
            }
        }else{
            return(
                <>
                    <header>
                        <Nav/>
                        <main>
                            <img src='../Images/logo.svg' alt='Logo'/>
                            <h1>THE LAST WORD</h1>
                            <div>
                                <section className="section__input">
                                    <label>
                                        <input type="text" onChange={handleChange}/>
                                    </label>
                                    {/* <img src={search} className='icon-search'></img> */}
                                    <button type='button' onClick={handleClick}>Buscar</button>
                                </section>
                            </div>
                        </main>
                    </header>
                    <div>
                        <button className="register-button" onClick={handleRegister}>
                        Registro
                        </button>
                        <button className="login-button" onClick={handleLogin}>
                        Iniciar sesión
                        </button>
                    </div>
                    {showModal &&
                        <Modal onClose={handleClose}>
                            {
                            isRegistered
                                ?
                                <Login />
                                :
                                <Register />
                            }
                        </Modal>}
                </>
            )
        }
    }
    
    
}

export default MainSearch