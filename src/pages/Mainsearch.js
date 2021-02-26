import React, {useState, useEffect}from 'react'
import Results from "./Results";
import Nav from "./Nav";
import ResultContent from './Result-content'
import datos from '../assets/data.json'
import logo from "../Images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function MainSearch() {
    const [show, setShow] = useState(false)
    const [data, setData] = useState('')
    const [change, setChange] = useState(false)
    const [dataApi, setDataApi] = useState(datos)

    //Trae los datos de la API local
    // useEffect(()=>{
    // }, [])

    //Muestra el primero componente que tiene las tarjetas de resultados de busqueda
    const handleClick = () =>{
        setShow(true)
    }

    //valida que el campo de busqueda no este vacio
    const handleChange = (event) =>{
        setData(event.target.value)
    }

    //Muestra el segundo componente con los resultados de la busqueda
    const handleClickResults = ()=>{
        setChange(true)
    }

    // return(
    //     <>
    //     {data.length > 0
    //         ? show ?
    //         <div>
    //             <header>
    //                 <Nav/>
    //                 <main>
    //                     <img src={logo} alt='Logo'/>
    //                     <h1>THE LAST WORD</h1>
    //                     <div>
    //                         <section className="section__input">
    //                         <label>
    //                             <input type="text"/>
    //                         </label>
    //                             {/* <img src={logo} className='icon-search'></img> */}
    //                             <button type='button'>Buscar</button>
    //                         </section>
    //                     </div>
    //                 </main>
    //             </header>
    //             <Results click={handleClickResults}/>
    //             <Results click={handleClickResults}/>
    //             <Results click={handleClickResults}/>
    //             {change ? <ResultContent/> : null}
    //         </div>
    //         : alert('Campo de busqueda vacio')
    //     }
    //     </>
    // )
    

    //Leer documentacion sobre (Renderizado condicional)

    if(change){
        return(
            <div>
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
                <ResultContent/>
            </div>
        )
    }else{
        if (show){
            if(data.length > 0){
                return(
                    <div>
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
                                    {/* <button type='button' onClick={handleClick}>Buscar</button> */}
                                </section>
                            </div>
                        </main>
                    </header>
                )
            }
        }else{
            return(
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
                                    onClick={handleClick}
                                />
                                {/* <button type='button' onClick={handleClick}>Buscar</button> */}
                            </section>
                        </div>
                    </main>
                </header>
            )
        }
    }

    
}

export default MainSearch