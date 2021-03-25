import React, { useEffect, useState } from 'react'
import { FcLikePlaceholder, FcLike } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { openArticle, likeArticle, dislikeArticle, activeArticle, startSaveArticle } from '../actions/articles';

export const SelectedContent = () => {


  const dispatch = useDispatch();

  const { active:article  } = useSelector(state => state.articles)


  const { like } = useSelector(state => state.articles )

  const articleContent = article.article.content
  // const articleContentJoined = articleContent.join( "\n" )

  const handleLike = () => {
    // dispatch( openArticle() );
    // console.log( article );
    dispatch( activeArticle( article.id, { ...article } ) )
    dispatch( startSaveArticle( article ) )
    dispatch( likeArticle() )
  }

  const handleDislike = () => {
    dispatch( dislikeArticle() )
  }

  return (
    <div className="selected__main-container">
      <div  className="selected-content">
        <div className="like-btn-container">
          {
            like
              ? <button onClick={ handleDislike } className="like-btn"><FcLike  /></button>
              : <button onClick={ handleLike } className="like-btn"><FcLikePlaceholder /></button>
          }

        </div>
        <div>
          <div className="article-body">
            <h1>{ article.article.name }</h1>
            {
              article.article.content.length >= 1
                ? <div>
                    <p> {articleContent[0].split(" ").slice(2).join(" ")} </p><br/>
                    <p> {articleContent[1]} </p><br/>
                    <p> {articleContent[2]} </p><br/>
                    <p> {articleContent[3]} </p><br/>
                    <p> {articleContent[4]} </p><br/>
                  </div>
                : <p>{ articleContent.split(" ").slice(2).join(" ") }</p>
            }

          </div>
          <div className="reference article-reference1">
            {
              article.headline.title
                ? <p>Este artículo es de { article.headline.title }: { article.headline.name } </p>
                : ''
            }
          </div>
          <div className="reference article-reference2">
            {
              article.chapter.title === "null"
                ? ''
                :  <p>- { article.chapter.title }: { article.chapter.name } </p>
            }
          </div>
          <div>
            <p>Fuente legal: { article.legal_source }</p>
          </div>
        </div>
      </div>
      <div className="back-btn">
        {/* <Link><h4> Regresar </h4></Link> */}
      </div>
    </div>
  )
}


