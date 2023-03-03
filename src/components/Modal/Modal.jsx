import React, { Component } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

Modal.setAppElement('#root');

class ImgModal extends Component {
  render() {
    const { isOpen, photo, closeModal } = this.props;

    return (
      <Modal
        isOpen={isOpen}
        contentLabel="Example Modal"
        onRequestClose={closeModal}
        className={css.ReactModal}
      >
        <div className={css.Overlay} onClick={closeModal}>
          <div className={css.Modal}>
            <img src={photo.largeImageURL} alt={photo.tags} />
          </div>
        </div>
      </Modal>
    );
  }
}

export default ImgModal;

ImgModal.propTypes = {
  photo: PropTypes.object,
  closeModal: PropTypes.func,
  isOpen: PropTypes.bool,
};
