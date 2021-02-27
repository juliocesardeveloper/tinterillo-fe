import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal';
import '../styles/components/Modal.scss'


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')

export const ModalForm = ( {children} ) => {

  const [isOpen, setIsOpen] = useState(true)

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={ isOpen }
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      className="modal"
      overlayClassName="modal-fondo"
    >
      {children}
    </Modal>
  )
//   return <div className='modal'>
//     <div className='modal-content'>
//       <div className="close-btn-container">
//         <button className='close-btn' onClick={onClose}>X</button>
//       </div>
//       <div>
//         {children}
//       </div>
//     </div>
    
//   </div>
// }

// export default function ModalPortal ({ children, onClose }) {
//   return ReactDOM.createPortal(
//     <ModalForm onClose={onClose}>
//       {children}
//     </ModalForm>,
//     document.getElementById('modal')
//   )
  
}