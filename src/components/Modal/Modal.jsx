import React, { Component } from 'react';

class Modal extends Component {
  render() {
    const { photo, closeModal } = this.props;

    return (
      <div className="Overlay" onClick={closeModal}>
        <div className="Modal">
          <img src={photo.largeImageURL} alt={photo.tags} />
        </div>
      </div>
    );
  }
}

export default Modal;
