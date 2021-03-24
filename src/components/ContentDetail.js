import React from "react";
import { useDispatch } from 'react-redux'

import { activeArticle } from '../actions/articles';

// import iconos
import { FiArrowRight } from 'react-icons/fi';

export const ContentDetail = ({res}) => {

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
      })
    )
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

