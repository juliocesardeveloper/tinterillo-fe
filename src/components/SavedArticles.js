import React from 'react'
import { useDispatch } from 'react-redux'
import { startDeleting } from '../actions/articles';

export const SavedArticles = ( articles ) => {

  const dispatch = useDispatch();
  // console.log(articles.article.content);

  const articleContent = articles.article.content
  const id = articles.id

  const handleDelete = () => {
    dispatch( startDeleting( id ) );
  }

  // console.log(articles.article.name);
  return (
    <div className="selected-article-container">
          <div >
            <h1>{ articles.article.name }</h1>
            {
              articleContent.length >= 1
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
              articles.headline.title
                ? <p>Este artículo es del { articles.headline.title }: { articles.headline.name } </p>
                : ''
            }
          </div>
          <div className="reference article-reference2">
            {
              articles.chapter.title === "null"
                ? ''
                :  <p>- { articles.chapter.title }: { articles.chapter.name } </p>
            }
          </div>
          <div className="delete-btn-container"><button className="delete-btn" onClick={handleDelete} >Quitar</button></div>
    </div>
  )
}
