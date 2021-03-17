import React from 'react'
import { FcLikePlaceholder, FcLike } from 'react-icons/fc';

export const SelectedContent = () => {
  return (
    <div className="selected-content">
      <div className="like-btn-container">
        <button className="like-btn"><FcLikePlaceholder className="like like-placeholder" /></button>
        <FcLike />
        
      </div>
      <div>
        <p>Selected content</p>
      </div>
    </div>
  )
}
