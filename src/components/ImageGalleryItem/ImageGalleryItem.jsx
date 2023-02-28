import Modal from 'components/Modal/Modal';
import React, { Component } from 'react';

class ImageGalleryItem extends Component {
  render() {
    const { photo } = this.props;
    return (
      <>
        <img
          src={photo.webformatURL}
          alt={photo.tags}
          className="ImageGalleryItem-image"
        />
        <Modal />
      </>
    );
  }
}

export default ImageGalleryItem;
