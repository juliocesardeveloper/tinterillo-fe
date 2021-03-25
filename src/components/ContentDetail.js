import React from "react";
import { useDispatch, useSelector } from 'react-redux'

import { activeArticle, dislikeArticle } from '../actions/articles';

// import iconos
import { FiArrowRight } from 'react-icons/fi';

export const ContentDetail = ({res}) => {

  const { like } = useSelector(state => state.articles)

  const dispatch = useDispatch();

  const id = res._id
  const article = res._source
  const articleName = article.article.name
  const articleContent = article.article.content[0]
  const contentAbstract = articleContent.split(" ", 10).slice(2).join(" ")

  const handleClick = () => {
      // setChange(true)
    dispatch(
      activeArticle( id, {
        ...article
      }))
    
    if ( like ) {
      dispatch( dislikeArticle() )

    }
  
    }

  return(
    <div onClick={handleClick} className='side-content'>
      <div className="side-content-title">
        <FiArrowRight className='item'/>
        <p className='item'>{articleName}</p>
      </div>
      <p>{contentAbstract}...</p>
    </div>
  )
}

