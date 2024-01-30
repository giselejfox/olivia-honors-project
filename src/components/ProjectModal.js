import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import ModalBodyContent from './ModalBodyContent';

export default function ProjectModal({showModal, modalContentTitle, handleCloseModal}) {

  console.log(modalContentTitle)

    return (
      <Modal show={showModal} onHide={handleCloseModal} dialogClassName="custom-modal">
          <Modal.Body><ModalBodyContent contentTitle={modalContentTitle} /></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
          </Modal.Footer>
        </Modal>
    )
}
  