import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { uiCloseStaffModal } from '../actions/ui';

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

export const ModalStaff = ( {children} ) => {

  const { modalStaffOpen } = useSelector( state => state.ui );
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch( uiCloseStaffModal() )
  }

  return (
    <Modal
      isOpen={ modalStaffOpen }
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={ 300 }
      contentLabel="Example Modal"
      className="modal-staff"
      overlayClassName="modal-fondo"
    >
      {children}
    </Modal>
  )
}