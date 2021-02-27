import React from 'react'
import ReactDOM from 'react-dom'
import '../styles/components/Modal.scss'

function Modal ({ children, onClose }) {
  return <div className='modal'>
    <div className='modal-content'>
      <div className="close-btn-container">
        <button className='close-btn' onClick={onClose}>X</button>
      </div>
      <div>
        {children}
      </div>
    </div>
    
  </div>
}

export default function ModalPortal ({ children, onClose }) {
  return ReactDOM.createPortal(
    <Modal onClose={onClose}>
      {children}
    </Modal>,
    document.getElementById('modal')
  )
}