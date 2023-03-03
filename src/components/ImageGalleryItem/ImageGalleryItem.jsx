import Modal from 'components/Modal/Modal';
import React, { Component } from 'react';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { photo } = this.props;
    const { isModalOpen } = this.state;
    return (
      <>
        {isModalOpen && (
          <Modal
            photo={photo}
            closeModal={this.closeModal}
            isOpen={this.state.isModalOpen}
          />
        )}

        <img
          src={photo.webformatURL}
          alt={photo.tags}
          className="ImageGalleryItem-image"
          onClick={this.openModal}
        />
      </>
    );
  }
}

export default ImageGalleryItem;
