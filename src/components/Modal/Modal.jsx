import React, { Component } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

class ImgModal extends Component {
  render() {
    const { isOpen, photo, closeModal } = this.props;

    return (
      <Modal
        isOpen={isOpen}
        contentLabel="Example Modal"
        onRequestClose={closeModal}
      >
        <div className="Overlay" onClick={closeModal}>
          <div className="ImgModal">
            <img src={photo.largeImageURL} alt={photo.tags} />
          </div>
        </div>
      </Modal>
    );
  }
}

export default ImgModal;
