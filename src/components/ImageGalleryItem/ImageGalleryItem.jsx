import Modal from 'components/Modal/Modal';
import React, { Component } from 'react';

class ImageGalleryItem extends Component {
  render() {
    const { photo } = this.props;
    return (
      <div>
        <img src={photo.webformatURL} alt={photo.tags} />
        <Modal />
      </div>
    );
  }
}

export default ImageGalleryItem;
