import React from 'react'

export const SavedArticles = ({ id, title, body }) => {

  console.log(id, title, body);
  return (
    <div>
          <div className="article-body">
            <h1>Articulo x</h1>
            {/* {
              article.article.content.length >= 1
                ? <div>
                    <p> {articleContent[0].split(" ").slice(2).join(" ")} </p><br/>
                    <p> {articleContent[1]} </p><br/>
                    <p> {articleContent[2]} </p><br/>
                    <p> {articleContent[3]} </p><br/>
                    <p> {articleContent[4]} </p><br/>
                  </div>
                : <p>{ articleContent.split(" ").slice(2).join(" ") }</p>
            } */}

            <div>
              <p>asdflkj lkasd;lkfj;lksjfd sdjfsdf;klsfjsd fskfdj;lksjfkljsf </p>
            </div>

          </div>
          <div className="reference article-reference1">
            {/* {
              article.headline.title
                ? <p>Este artículo es del { article.headline.title }: { article.headline.name } </p>
                : ''
            } */}
          </div>
          <div className="reference article-reference2">
            {/* {
              article.chapter.title === "null"
                ? ''
                :  <p>- { article.chapter.title }: { article.chapter.name } </p>
            } */}
          </div>
        </div>
  )
}
