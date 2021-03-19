import React from 'react'
import { useDispatch } from 'react-redux';
import { activeArticle } from '../actions/articles';
// import iconos
import { FiArrowRight } from 'react-icons/fi';

function Results({click, info}){

  const dispatch = useDispatch();

  const id = info._id
  const article = info._source
  const content = info._source.article.content[0]
  console.log(content);
  const contentAbstract = content.split(" ", 20).join(" ")

  const onClick = () => {
    click()
    dispatch(
      activeArticle( id, {
          ...article
      })
  )
  }

  return(
    <div>
      <div className='result__content' onClick={onClick}>
        <div className='result__content-guide'>
          <h2 className='item'>{info._source.headline.Title}</h2>
          <FiArrowRight className='icon'/>
          <h2 className='item'>{info._source.article.name}</h2>
        </div>
        <div>
          <p>{contentAbstract}...</p>
        </div>
      </div>
    </div>
  )
}

export default Results