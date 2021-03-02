import React from 'react'
// import iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

function Results({click}){

    const onClick = () => {
        click()
    }

    return(
        <div>
            <div className='result__content' onClick={onClick}>
                <div className='result__content-guide'>
                    <h2 className='item'>Titulo III</h2>
                    <FontAwesomeIcon icon={faGreaterThan} className='icon'/>
                    <h2 className='item'>Capitulo 1</h2>
                    <FontAwesomeIcon icon={faGreaterThan} className='icon'/>
                    <h2 className='item'>Articulo 96</h2>
                </div>
                <div>
                    <p>
                    El colombiano, aunque haya renunciado a la calidad de nacional, que actúe contra los intereses del país en guerra exterior contra Colombia, será juzgado y penado como traidor.\nLos colombianos por adopción y los extranjeros domiciliados en...
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Results