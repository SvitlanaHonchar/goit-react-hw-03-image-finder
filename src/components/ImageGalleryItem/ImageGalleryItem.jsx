import ImgModal from 'components/Modal/Modal';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { photo } = this.props;
    return (
      <>
        <ImgModal
          photo={photo}
          closeModal={this.closeModal}
          isOpen={this.state.isModalOpen}
        />

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

ImageGalleryItem.propTypes = {
  photo: PropTypes.object,
};
