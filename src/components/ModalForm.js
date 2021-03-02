import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { uiCloseModal } from '../actions/ui';

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

  const { modalOpen } = useSelector( state => state.ui );
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch( uiCloseModal() )
  }

  return (
    <Modal
      isOpen={ modalOpen }
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={ 300 }
      contentLabel="Example Modal"
      className="modal"
      overlayClassName="modal-fondo"
    >
      {children}
    </Modal>
  )
}