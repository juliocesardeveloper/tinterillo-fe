import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import Results from "../components/results";
import Nav from "../components/Nav";
import ResultContent from '../components/Result-content'
import logo from "../Images/logo-tinterillo-light-color.png";
import { FaSearch } from 'react-icons/fa';
// import Swal from 'sweetalert2';

export default function MainSearch() {
  const [show, setShow] = useState(false)
  const [style, setStyle] = useState('header')
  const [data, setData] = useState('')
  const [change, setChange] = useState(false)
  const history = useHistory()
  const [dataApi, setDataApi] = useState([])

  const URL = 'https://searcher-col.herokuapp.com/api/es/search?search=pluralista&index=constitucion'

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(res => setDataApi(res))
  }, [])

  //Muestra el primer componente que tiene las tarjetas de resultados de busqueda
  const handleSubmit = (e) =>{
    e.preventDefault();
    if (data){
      setStyle('header__all')
      setShow(true)
      // history.push('/search')
    }else{
      console.log('Campo de busqueda vacia');
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

  return(
    <>
      <form className={style} onSubmit={handleSubmit}>
        <header>
          <Nav/>
          <main>
            <img src={logo} alt='Logo'/>
            <h1>TINTERILLO APP</h1>
            <div>
              <section className="section__input">
              <label>
                <input type="text" onChange={handleChange}/>
              </label>
                <button className='icon-search' type='submit'>
                  <FaSearch/>
                </button>
              </section>
            </div>
          </main>
        </header>
      </form>
      {
        change
        ?
          <ResultContent info={dataApi}/>
        :
          show &&
          dataApi.body.hits.hits.map(info => {
            return(
              <Results key={info._id} click={handleClickResults} info={info}/>
            )
          })
      }
    </>
  )
}
