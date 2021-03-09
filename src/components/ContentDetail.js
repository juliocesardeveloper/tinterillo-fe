import React from "react";
// import iconos
import { FiArrowRight } from 'react-icons/fi';

export default function ContentDetail({res}) {
    return(
        <div className='side-content'>
            <p className='item'>{res._source.headline.Title}</p>
            <FiArrowRight className='item'/>
            {/* <p className='item'>Capitulo 1</p> */}
            {/* <FiArrowRight className='item'/> */}
            <p className='item'>{res._source.article.name}</p>
        </div>
    )
}