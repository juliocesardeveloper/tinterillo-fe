import React from 'react'
// import iconos
import { FiArrowRight } from 'react-icons/fi';
import { FcLikePlaceholder } from 'react-icons/fc';

function Results({click, info}){

  const onClick = () => {
    click()
  }

  return(
    <div>
      <div className='result__content' onClick={onClick}>
        <div className='result__content-guide'>
          <h2 className='item'>{info._source.headline.Title}</h2>
          <FiArrowRight className='icon'/>
          <h2 className='item'>{info._source.article.name}</h2>
          <FcLikePlaceholder />
        </div>
        <div>
          <p>{info._source.article.content}</p>
        </div>
      </div>
    </div>
  )
}

export default Results