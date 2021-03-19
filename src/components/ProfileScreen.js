import React from 'react'

import { SavedArticles } from './SavedArticles'
import Nav from './Nav'

export const ProfileScreen = ({ children }) => {
  return (
    <>
      <div className="profile-main-container">
        <Nav />
      </div>
      <div>
        <SavedArticles />
      </div>
    </>
  )
}
