import React from "react";
// import iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

export default function ContentDetail() {
    return(
        <div className='side-content'>
            <p className='item'>Titulo III</p>
            <FontAwesomeIcon icon={faGreaterThan} className='item'/>
            <p className='item'>Capitulo 1</p>
            <FontAwesomeIcon icon={faGreaterThan} className='item'/>
            <p className='item'>Articulo 96</p>
        </div>
    )
}