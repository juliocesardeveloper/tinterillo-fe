import React from 'react'

import { SavedArticles } from './SavedArticles'
import Nav from './Nav'
import { useSelector } from 'react-redux'

export const ProfileScreen = ({ children }) => {

  const { articles } = useSelector(state => state.articles)

  return (
    <>
      <div className="profile-main-container">
        <Nav />
      </div>
      <div>

        {
          articles.map( article => (
            <SavedArticles 
              key={ article.id }
              { ...article }
            />
          ))
        }


        
      </div>
    </>
  )
}
