import React from 'react'

import { SavedArticles } from './SavedArticles'
import Nav from './Nav'
import { useSelector } from 'react-redux'
import { Footer } from './Footer'

export const ProfileScreen = ({ children }) => {

  const { articles } = useSelector(state => state.articles)

  return (
    <>
      <div className="profile-main-container">
        <div className="profile-main-container__nav">
          <Nav />
        </div>
        <div className="articles-container">

          {
            articles.map( article => (
              <SavedArticles 
                key={ article.id }
                { ...article }
              />
            ))
          }
        </div>
        <div>
          <Footer />
        </div>

      </div>
    </>
  )
}
